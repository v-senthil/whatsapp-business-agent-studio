import type { ConnectorInput } from "@/lib/schemas/connector";

export interface ConnectorTemplate {
  slug: string;
  label: string;
  description: string;
  iconGlyph: string;
  category:
    | "Sales & CRM"
    | "Support"
    | "Finance"
    | "Inventory & Commerce"
    | "HR & People"
    | "Marketing"
    | "Productivity"
    | "Analytics"
    | "Developer"
    | "Sign & Contracts"
    | "Events & Learning";
  docs?: string;
  input: ConnectorInput;
}

// All templates are Zoho products. They share one accounts server for token
// issuance. Users switch the .com suffix on both the token URL and the base
// URL to match their data center: .in, .eu, .com.au, .jp, .com.cn, or .ca.
const ZOHO_TOKEN_URL_COM = "https://accounts.zoho.com/oauth/v2/token";

function zoho(
  slug: string,
  label: string,
  category: ConnectorTemplate["category"],
  base_url: string,
  scopes: string[],
  description: string,
  iconGlyph: string,
  docs: string,
): ConnectorTemplate {
  return {
    slug,
    label,
    description,
    iconGlyph,
    category,
    docs,
    input: {
      name: label,
      description,
      base_url,
      auth_type: "OAUTH2_CLIENT_CREDENTIALS",
      auth_config: {
        oauth2_client_credentials: {
          token_url: ZOHO_TOKEN_URL_COM,
          scopes_to_request: scopes,
          client_id: "",
          client_secret: "",
          token_request_content_type: "application/x-www-form-urlencoded",
        },
      },
    },
  };
}

const TEMPLATES: ConnectorTemplate[] = [
  // ---- Sales & CRM -----------------------------------------------------
  zoho(
    "zoho-crm",
    "Zoho CRM",
    "Sales & CRM",
    "https://www.zohoapis.com/crm/v6",
    ["ZohoCRM.modules.ALL", "ZohoCRM.settings.ALL", "ZohoCRM.users.READ"],
    "Query and mutate Zoho CRM leads, deals, accounts, and contacts.",
    "CRM",
    "https://www.zoho.com/crm/developer/docs/api/v6/",
  ),
  zoho(
    "zoho-bigin",
    "Zoho Bigin",
    "Sales & CRM",
    "https://www.zohoapis.com/bigin/v2",
    ["ZohoBigin.modules.ALL", "ZohoBigin.settings.READ"],
    "Query and mutate Zoho Bigin pipelines, contacts, and deals. The lightweight CRM for small teams.",
    "BG",
    "https://www.zoho.com/bigin/developer/docs/",
  ),
  zoho(
    "zoho-salesiq",
    "Zoho SalesIQ",
    "Sales & CRM",
    "https://salesiq.zoho.com/api/v2",
    ["SalesIQ.visitors.ALL", "SalesIQ.chats.ALL", "SalesIQ.tracking.READ"],
    "Read live visitors, chats, and department data from Zoho SalesIQ.",
    "SIQ",
    "https://www.zoho.com/salesiq/help/developer-section/rest-api-v2.html",
  ),
  zoho(
    "zoho-backstage",
    "Zoho Backstage",
    "Sales & CRM",
    "https://api.backstage.zoho.com/api/v1",
    ["ZohoBackstage.event.READ", "ZohoBackstage.attendee.ALL"],
    "Manage events, sessions, and attendees on Zoho Backstage.",
    "BS",
    "https://www.zoho.com/backstage/api/",
  ),

  // ---- Support ---------------------------------------------------------
  zoho(
    "zoho-desk",
    "Zoho Desk",
    "Support",
    "https://desk.zoho.com/api/v1",
    ["Desk.tickets.ALL", "Desk.contacts.READ", "Desk.basic.READ", "Desk.search.READ"],
    "Read and create Zoho Desk tickets, look up contacts and departments.",
    "DK",
    "https://desk.zoho.com/DeskAPIDocument",
  ),
  zoho(
    "zoho-assist",
    "Zoho Assist",
    "Support",
    "https://assist.zoho.com/api/v2",
    ["ZohoAssist.remoteSupport.CREATE", "ZohoAssist.sessions.READ"],
    "Start remote support sessions and read session history on Zoho Assist.",
    "AS",
    "https://www.zoho.com/assist/api/",
  ),
  zoho(
    "zoho-lens",
    "Zoho Lens",
    "Support",
    "https://lens.zoho.com/api/v1",
    ["ZohoLens.session.CREATE", "ZohoLens.session.READ"],
    "Start augmented-reality remote assistance sessions on Zoho Lens.",
    "LN",
    "https://www.zoho.com/lens/",
  ),

  // ---- Finance ---------------------------------------------------------
  zoho(
    "zoho-books",
    "Zoho Books",
    "Finance",
    "https://www.zohoapis.com/books/v3",
    [
      "ZohoBooks.invoices.ALL",
      "ZohoBooks.contacts.ALL",
      "ZohoBooks.estimates.ALL",
      "ZohoBooks.settings.READ",
    ],
    "Create invoices and estimates, read customers and payments on Zoho Books.",
    "BK",
    "https://www.zoho.com/books/api/v3/",
  ),
  zoho(
    "zoho-invoice",
    "Zoho Invoice",
    "Finance",
    "https://www.zohoapis.com/invoice/v3",
    ["ZohoInvoice.invoices.ALL", "ZohoInvoice.contacts.ALL", "ZohoInvoice.settings.READ"],
    "Create and send invoices, manage customers and payments on Zoho Invoice.",
    "IV",
    "https://www.zoho.com/invoice/api/v3/",
  ),
  zoho(
    "zoho-expense",
    "Zoho Expense",
    "Finance",
    "https://www.zohoapis.com/expense/v1",
    ["ZohoExpense.expenses.ALL", "ZohoExpense.reports.ALL", "ZohoExpense.settings.READ"],
    "Submit expenses, manage reports, and read approvals on Zoho Expense.",
    "EX",
    "https://www.zoho.com/expense/api/v1/",
  ),
  zoho(
    "zoho-billing",
    "Zoho Billing",
    "Finance",
    "https://www.zohoapis.com/billing/v1",
    ["ZohoBilling.subscriptions.ALL", "ZohoBilling.customers.ALL", "ZohoBilling.invoices.ALL"],
    "Manage recurring subscriptions, customers, and invoices on Zoho Billing (formerly Subscriptions).",
    "BL",
    "https://www.zoho.com/billing/api/",
  ),
  zoho(
    "zoho-checkout",
    "Zoho Checkout",
    "Finance",
    "https://checkout.zoho.com/api/v1",
    ["ZohoCheckout.pages.ALL", "ZohoCheckout.payments.READ"],
    "Create payment pages and read payment history on Zoho Checkout.",
    "CK",
    "https://www.zoho.com/checkout/",
  ),
  zoho(
    "zoho-practice",
    "Zoho Practice",
    "Finance",
    "https://www.zohoapis.com/practice/v1",
    ["ZohoPractice.clients.ALL", "ZohoPractice.tasks.ALL", "ZohoPractice.workflows.READ"],
    "Manage clients, tasks, and workflows on Zoho Practice for accounting firms.",
    "PR",
    "https://www.zoho.com/practice/",
  ),

  // ---- Inventory & Commerce -------------------------------------------
  zoho(
    "zoho-inventory",
    "Zoho Inventory",
    "Inventory & Commerce",
    "https://www.zohoapis.com/inventory/v1",
    [
      "ZohoInventory.items.ALL",
      "ZohoInventory.salesorders.ALL",
      "ZohoInventory.shipmentorders.ALL",
      "ZohoInventory.contacts.READ",
    ],
    "Query stock, sales orders, and shipments on Zoho Inventory.",
    "IN",
    "https://www.zoho.com/inventory/api/v1/",
  ),
  zoho(
    "zoho-commerce",
    "Zoho Commerce",
    "Inventory & Commerce",
    "https://commerce.zoho.com/store/api/v1",
    ["ZohoCommerce.products.ALL", "ZohoCommerce.orders.ALL", "ZohoCommerce.customers.READ"],
    "Manage products, orders, and customers on Zoho Commerce.",
    "CM",
    "https://www.zoho.com/commerce/",
  ),

  // ---- HR & People ----------------------------------------------------
  zoho(
    "zoho-people",
    "Zoho People",
    "HR & People",
    "https://people.zoho.com/people/api",
    ["ZohoPeople.employee.ALL", "ZohoPeople.leave.ALL", "ZohoPeople.attendance.ALL"],
    "Read and mutate employees, leave requests, and attendance on Zoho People.",
    "PL",
    "https://www.zoho.com/people/api/",
  ),
  zoho(
    "zoho-recruit",
    "Zoho Recruit",
    "HR & People",
    "https://recruit.zoho.com/recruit/v2",
    ["ZohoRecruit.modules.ALL", "ZohoRecruit.settings.READ"],
    "Manage candidates, job openings, and interviews on Zoho Recruit.",
    "RC",
    "https://www.zoho.com/recruit/developer-guide/",
  ),
  zoho(
    "zoho-payroll",
    "Zoho Payroll",
    "HR & People",
    "https://payroll.zoho.com/api/v1",
    ["ZohoPayroll.employees.ALL", "ZohoPayroll.payruns.ALL"],
    "Read employees and run payroll on Zoho Payroll.",
    "PY",
    "https://www.zoho.com/payroll/",
  ),
  zoho(
    "zoho-shifts",
    "Zoho Shifts",
    "HR & People",
    "https://shifts.zoho.com/api/v1",
    ["ZohoShifts.schedule.ALL", "ZohoShifts.timesheet.READ"],
    "Manage shift schedules and timesheets on Zoho Shifts.",
    "SH",
    "https://www.zoho.com/shifts/",
  ),

  // ---- Marketing ------------------------------------------------------
  zoho(
    "zoho-campaigns",
    "Zoho Campaigns",
    "Marketing",
    "https://campaigns.zoho.com/api/v1.1",
    ["ZohoCampaigns.campaign.ALL", "ZohoCampaigns.contact.ALL"],
    "Manage lists and subscribers, launch email campaigns on Zoho Campaigns.",
    "CP",
    "https://www.zoho.com/campaigns/help/api/",
  ),
  zoho(
    "zoho-marketingautomation",
    "Zoho Marketing Automation",
    "Marketing",
    "https://automation.zoho.com/api",
    ["ZohoMarketingAutomation.leads.ALL", "ZohoMarketingAutomation.journeys.READ"],
    "Track leads, run journeys, and score contacts on Zoho Marketing Automation.",
    "MA",
    "https://www.zoho.com/marketingautomation/",
  ),
  zoho(
    "zoho-social",
    "Zoho Social",
    "Marketing",
    "https://www.zohoapis.com/social/v1",
    ["ZohoSocial.posts.ALL", "ZohoSocial.brands.READ"],
    "Post to social channels and read brand analytics on Zoho Social.",
    "SO",
    "https://www.zoho.com/social/",
  ),
  zoho(
    "zoho-survey",
    "Zoho Survey",
    "Marketing",
    "https://survey.zoho.com/api/v1",
    ["ZohoSurvey.surveys.READ", "ZohoSurvey.responses.READ"],
    "Read survey responses and manage surveys on Zoho Survey.",
    "SV",
    "https://www.zoho.com/survey/",
  ),
  zoho(
    "zoho-forms",
    "Zoho Forms",
    "Marketing",
    "https://forms.zoho.com/api/v1",
    ["ZohoForms.forms.ALL", "ZohoForms.reports.READ"],
    "Read form submissions and manage forms on Zoho Forms.",
    "FM",
    "https://www.zoho.com/forms/api/",
  ),
  zoho(
    "zoho-pagesense",
    "Zoho PageSense",
    "Marketing",
    "https://pagesense.zoho.com/api/v1",
    ["ZohoPageSense.projects.READ", "ZohoPageSense.reports.READ"],
    "Read A/B test results, heatmaps, and session data on Zoho PageSense.",
    "PS",
    "https://www.zoho.com/pagesense/",
  ),
  zoho(
    "zoho-sites",
    "Zoho Sites",
    "Marketing",
    "https://sites.zoho.com/api/v1",
    ["ZohoSites.sites.READ", "ZohoSites.pages.READ"],
    "List sites and pages, read analytics on Zoho Sites.",
    "ST",
    "https://www.zoho.com/sites/",
  ),

  // ---- Productivity ---------------------------------------------------
  zoho(
    "zoho-mail",
    "Zoho Mail",
    "Productivity",
    "https://mail.zoho.com/api",
    ["ZohoMail.messages.ALL", "ZohoMail.accounts.READ", "ZohoMail.folders.READ"],
    "Send and read email, manage folders and accounts on Zoho Mail.",
    "ML",
    "https://www.zoho.com/mail/help/api/",
  ),
  zoho(
    "zoho-cliq",
    "Zoho Cliq",
    "Productivity",
    "https://cliq.zoho.com/api/v2",
    ["ZohoCliq.Webhooks.CREATE", "ZohoCliq.Channels.READ", "ZohoCliq.Users.READ"],
    "Post messages to Zoho Cliq channels, look up users, list channels.",
    "CQ",
    "https://www.zoho.com/cliq/help/restapi/",
  ),
  zoho(
    "zoho-meeting",
    "Zoho Meeting",
    "Productivity",
    "https://meeting.zoho.com/api/v2",
    ["ZohoMeeting.meeting.ALL", "ZohoMeeting.webinar.ALL"],
    "Schedule meetings and webinars, read session data on Zoho Meeting.",
    "MT",
    "https://www.zoho.com/meeting/api/",
  ),
  zoho(
    "zoho-workdrive",
    "Zoho WorkDrive",
    "Productivity",
    "https://workdrive.zoho.com/api/v1",
    ["WorkDrive.files.ALL", "WorkDrive.workspace.READ"],
    "Manage files, folders, and team workspaces on Zoho WorkDrive.",
    "WD",
    "https://workdrive.zoho.com/apidocs/v1/",
  ),
  zoho(
    "zoho-writer",
    "Zoho Writer",
    "Productivity",
    "https://writer.zoho.com/api/v1",
    ["ZohoWriter.documentEditor.ALL", "ZohoWriter.merge.ALL"],
    "Create, edit, and mail-merge documents on Zoho Writer.",
    "WR",
    "https://www.zoho.com/writer/help/api/v1/",
  ),
  zoho(
    "zoho-sheet",
    "Zoho Sheet",
    "Productivity",
    "https://sheet.zoho.com/api/v2",
    ["ZohoSheet.dataAPI.ALL"],
    "Read and write sheet data on Zoho Sheet.",
    "SS",
    "https://www.zoho.com/sheet/help/api/",
  ),
  zoho(
    "zoho-show",
    "Zoho Show",
    "Productivity",
    "https://show.zoho.com/api/v1",
    ["ZohoShow.presentation.ALL"],
    "Create and edit presentations on Zoho Show.",
    "SW",
    "https://www.zoho.com/show/",
  ),
  zoho(
    "zoho-notebook",
    "Zoho Notebook",
    "Productivity",
    "https://notebook.zoho.com/api/v1",
    ["ZohoNotebook.notes.ALL"],
    "Create and read notebooks and notes on Zoho Notebook.",
    "NB",
    "https://www.zoho.com/notebook/",
  ),
  zoho(
    "zoho-bookings",
    "Zoho Bookings",
    "Productivity",
    "https://www.zohoapis.com/bookings/v1",
    ["zohobookings.data.CREATE", "zohobookings.data.READ", "zohobookings.data.UPDATE"],
    "Read availability and book appointments on Zoho Bookings.",
    "BO",
    "https://www.zoho.com/bookings/help/api/v1/",
  ),
  zoho(
    "zoho-calendar",
    "Zoho Calendar",
    "Productivity",
    "https://calendar.zoho.com/api/v1",
    ["ZohoCalendar.calendar.ALL", "ZohoCalendar.event.ALL"],
    "Read and create calendar events on Zoho Calendar.",
    "CA",
    "https://www.zoho.com/calendar/",
  ),
  zoho(
    "zoho-vault",
    "Zoho Vault",
    "Productivity",
    "https://vault.zoho.com/api/rest/json/v1",
    ["ZohoVault.secrets.READ", "ZohoVault.secrets.CREATE"],
    "Read and create secrets on Zoho Vault. Restrict scopes carefully.",
    "VL",
    "https://www.zoho.com/vault/api/",
  ),
  zoho(
    "zoho-connect",
    "Zoho Connect",
    "Productivity",
    "https://connect.zoho.com/pulse/api",
    ["ZohoConnect.feeds.ALL", "ZohoConnect.groups.READ"],
    "Post to team feeds and read groups on Zoho Connect.",
    "CN",
    "https://www.zoho.com/connect/api/",
  ),

  // ---- Analytics ------------------------------------------------------
  zoho(
    "zoho-analytics",
    "Zoho Analytics",
    "Analytics",
    "https://analyticsapi.zoho.com/restapi/v2",
    ["ZohoAnalytics.data.READ", "ZohoAnalytics.metadata.READ", "ZohoAnalytics.share.READ"],
    "Query workspaces, views, and reports on Zoho Analytics.",
    "AN",
    "https://www.zoho.com/analytics/api/v2/",
  ),
  zoho(
    "zoho-dataprep",
    "Zoho DataPrep",
    "Analytics",
    "https://dataprep.zoho.com/api/v1",
    ["ZohoDataPrep.workspaces.READ", "ZohoDataPrep.pipelines.ALL"],
    "Run pipelines and read workspace data on Zoho DataPrep.",
    "DP",
    "https://www.zoho.com/dataprep/",
  ),

  // ---- Developer ------------------------------------------------------
  zoho(
    "zoho-creator",
    "Zoho Creator",
    "Developer",
    "https://www.zohoapis.com/creator/v2.1",
    ["ZohoCreator.report.READ", "ZohoCreator.form.CREATE", "ZohoCreator.meta.READ"],
    "Query reports and submit forms on your Zoho Creator low-code apps.",
    "CR",
    "https://www.zoho.com/creator/help/api/v2/",
  ),
  zoho(
    "zoho-flow",
    "Zoho Flow",
    "Developer",
    "https://www.zohoapis.com/flow/v1",
    ["ZohoFlow.flows.READ", "ZohoFlow.executions.READ"],
    "List flows and inspect executions on Zoho Flow.",
    "FL",
    "https://www.zoho.com/flow/api/",
  ),
  zoho(
    "zoho-catalyst",
    "Zoho Catalyst",
    "Developer",
    "https://api.catalyst.zoho.com/baas/v1",
    ["ZohoCatalyst.projects.READ", "ZohoCatalyst.functions.EXECUTE"],
    "Invoke serverless functions and read project data on Zoho Catalyst.",
    "CT",
    "https://catalyst.zoho.com/help/api-references.html",
  ),
  zoho(
    "zoho-directory",
    "Zoho Directory",
    "Developer",
    "https://directory.zoho.com/api/v1",
    ["ZohoDirectory.users.ALL", "ZohoDirectory.groups.READ", "ZohoDirectory.orgs.READ"],
    "Manage users and groups on Zoho Directory.",
    "DR",
    "https://www.zoho.com/directory/api/",
  ),

  // ---- Sign & Contracts ----------------------------------------------
  zoho(
    "zoho-sign",
    "Zoho Sign",
    "Sign & Contracts",
    "https://sign.zoho.com/api/v1",
    ["ZohoSign.documents.ALL", "ZohoSign.folders.READ", "ZohoSign.templates.READ"],
    "Create and dispatch e-signature requests, and read signing status on Zoho Sign.",
    "SG",
    "https://www.zoho.com/sign/api/",
  ),
  zoho(
    "zoho-contracts",
    "Zoho Contracts",
    "Sign & Contracts",
    "https://contracts.zoho.com/api/v1",
    ["ZohoContracts.contracts.ALL", "ZohoContracts.templates.READ"],
    "Create, review, and dispatch contracts on Zoho Contracts.",
    "CO",
    "https://www.zoho.com/contracts/",
  ),

  // ---- Events & Learning ---------------------------------------------
  zoho(
    "zoho-learn",
    "Zoho Learn",
    "Events & Learning",
    "https://learn.zoho.com/api/v1",
    ["ZohoLearn.courses.READ", "ZohoLearn.users.READ"],
    "Read courses, learners, and progress on Zoho Learn.",
    "LR",
    "https://www.zoho.com/learn/",
  ),
  zoho(
    "zoho-webinar",
    "Zoho Webinar",
    "Events & Learning",
    "https://meeting.zoho.com/api/v2/webinar",
    ["ZohoMeeting.webinar.ALL", "ZohoMeeting.webinar.attendee.READ"],
    "Schedule webinars and read attendee data via Zoho Meeting's webinar API.",
    "WB",
    "https://www.zoho.com/meeting/api/",
  ),
];

export function connectorTemplates(): ConnectorTemplate[] {
  return TEMPLATES;
}

export function findConnectorTemplate(slug: string): ConnectorTemplate | undefined {
  return TEMPLATES.find((t) => t.slug === slug);
}
