"use client";
import * as React from "react";
import { Upload, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const ALLOWED = [".pdf", ".doc", ".docx", ".png", ".jpg", ".jpeg", ".csv", ".xlsx", ".txt", ".md"];
const MAX_MB = 100;

interface UploadItem {
  id: string;
  file: File;
  progress: number;
  status: "queued" | "uploading" | "done" | "error";
  error?: string;
  xhr?: XMLHttpRequest;
}

interface Props { entityId: string; onDone?: () => void; }

export function FileUploader({ entityId, onDone }: Props) {
  const [items, setItems] = React.useState<UploadItem[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  function validate(file: File): string | undefined {
    const ext = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
    if (!ALLOWED.includes(ext)) return `Unsupported type ${ext}`;
    if (file.size > MAX_MB * 1024 * 1024) return `Over ${MAX_MB}MB limit`;
  }

  function upload(item: UploadItem) {
    const xhr = new XMLHttpRequest();
    item.xhr = xhr;
    const fd = new FormData();
    fd.append("file_name", item.file.name);
    fd.append("file", item.file);
    xhr.open("POST", `/api/meta/${entityId}/agent_config/files`);
    xhr.upload.onprogress = (e) => {
      if (!e.lengthComputable) return;
      const pct = Math.round((e.loaded / e.total) * 100);
      setItems((all) => all.map((x) => (x.id === item.id ? { ...x, progress: pct } : x)));
    };
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        setItems((all) => all.map((x) => (x.id === item.id ? { ...x, progress: 100, status: "done" } : x)));
        toast.success(`${item.file.name} uploaded`);
        onDone?.();
      } else {
        let msg = xhr.statusText;
        try { const b = JSON.parse(xhr.responseText); msg = b.detail ?? b.title ?? msg; } catch {}
        setItems((all) => all.map((x) => (x.id === item.id ? { ...x, status: "error", error: msg } : x)));
      }
    };
    xhr.onerror = () => setItems((all) => all.map((x) => (x.id === item.id ? { ...x, status: "error", error: "Network error" } : x)));
    xhr.send(fd);
    setItems((all) => all.map((x) => (x.id === item.id ? { ...x, status: "uploading" } : x)));
  }

  function onFiles(files: FileList | null) {
    if (!files) return;
    const next: UploadItem[] = [];
    for (const f of Array.from(files)) {
      const err = validate(f);
      const item: UploadItem = { id: crypto.randomUUID(), file: f, progress: 0, status: err ? "error" : "queued", error: err };
      next.push(item);
    }
    setItems((prev) => [...prev, ...next]);
    // Kick off uploads for valid items
    next.filter((x) => !x.error).forEach(upload);
  }

  function cancel(id: string) {
    setItems((all) => {
      const found = all.find((x) => x.id === id);
      found?.xhr?.abort();
      return all.filter((x) => x.id !== id);
    });
  }

  return (
    <div className="space-y-3">
      <div
        onDrop={(e) => { e.preventDefault(); onFiles(e.dataTransfer.files); }}
        onDragOver={(e) => e.preventDefault()}
        className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 p-8 text-center"
      >
        <Upload className="mb-2 h-6 w-6 text-muted-foreground" />
        <p className="text-sm">Drop files here or</p>
        <Button type="button" variant="outline" size="sm" className="mt-2" onClick={() => inputRef.current?.click()}>
          Choose files
        </Button>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept={ALLOWED.join(",")}
          className="hidden"
          onChange={(e) => onFiles(e.target.files)}
        />
        <p className="mt-2 text-xs text-muted-foreground">PDF, DOCX, CSV, XLSX, PNG, JPG · up to {MAX_MB}MB each</p>
      </div>
      {items.length > 0 && (
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id} className="flex items-center gap-3 rounded-md border p-2 text-sm">
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate font-medium">{item.file.name}</span>
                  <span className="text-xs text-muted-foreground">{Math.round(item.file.size / 1024)} KB</span>
                </div>
                {item.status === "uploading" && <Progress value={item.progress} className="mt-2 h-1" />}
                {item.status === "error" && <p className="mt-1 text-xs text-destructive">{item.error}</p>}
                {item.status === "done" && <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">Uploaded</p>}
              </div>
              <Button type="button" variant="ghost" size="icon" onClick={() => cancel(item.id)}><X className="h-4 w-4" /></Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
