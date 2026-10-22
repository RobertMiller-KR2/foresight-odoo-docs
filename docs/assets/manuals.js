const MODULES = [
  {
    "slug": "customer-blanket-orders",
    "module": "customer_blanket_orders",
    "name": "Customer Blanket Orders",
    "version": "19.0.6.3.2",
    "category": "Sales & Agreements",
    "repo": "odoo19-customer-blanket-orders",
    "summary": "Creates customer quantity agreements, tracks remaining quantities, and converts partial releases into linked sales orders.",
    "setup": [
      "Open Sales → Orders → Blanket Orders → All Blanket Orders and confirm the correct company is active.",
      "Confirm the customer, replenishment warehouse, products, unit prices, agreement dates, and responsible salesperson are available.",
      "Use sanitized sandbox records when training or capturing documentation."
    ],
    "use": [
      "Open Sales → Orders → Blanket Orders → All Blanket Orders and select New.",
      "Complete the customer, agreement dates, warehouse, and blanket lines; save and select Activate.",
      "Select Release Partial Shipment, enter the requested delivery date and release quantity, then select Create Release.",
      "Open the linked Sales Order to review and confirm it when the customer release is approved."
    ],
    "troubleshoot": [
      "A release cannot exceed the Remaining Qty shown on the active agreement.",
      "If another company’s orders cause an access error, switch to the company that owns those orders; customer blanket-order views only show orders for the active company.",
      "If Create Release produces no quantity, confirm Qty to Release is greater than zero and the product has available blanket quantity."
    ],
    "walkthrough": [
      {
        "title": "Enable the company setting",
        "image": "assets/screenshots/customer-blanket-orders-setting.jpg",
        "caption": "The company settings show Enable Blanket Orders and optional defaults.",
        "steps": [
          "Switch to the intended company.",
          "Open Settings and find Customer Blanket Orders.",
          "Enable Blanket Orders and save.",
          "Review optional defaults before creating an agreement."
        ]
      },
      {
        "title": "Create the blanket agreement",
        "image": "assets/blanket-orders-new-form.jpg",
        "caption": "A new Blanket Order starts in Draft with the customer, agreement, reminders, purchasing options, and quantity summary visible.",
        "steps": [
          "In Odoo, open Sales.",
          "Choose Orders → Blanket Orders → All Blanket Orders.",
          "Select New.",
          "In Customer, select the agreement customer.",
          "Enter the Customer PO / Reference.",
          "Verify Salesperson, Company, and Replenishment Warehouse.",
          "Set Start Date and End Date.",
          "Optionally configure reminder recipients and shortage-purchasing options."
        ]
      },
      {
        "title": "Add products and activate",
        "image": "assets/blanket-orders-completed-draft.jpg",
        "caption": "The saved draft summarizes the total, remaining, scheduled, and released quantities for every blanket line.",
        "steps": [
          "On the Blanket Lines tab, select Add a line.",
          "Select the Product.",
          "Enter Blanket Qty and Unit Price; verify UoM and taxes.",
          "Repeat for every product covered by the agreement.",
          "Save the record. Odoo assigns the CBO number and calculates agreement totals.",
          "Review Remaining Qty, Agreement Value, and Unscheduled Qty.",
          "Select Activate. The status changes from Draft to Active and Release Partial Shipment becomes available."
        ]
      },
      {
        "title": "Enter a partial release",
        "image": "assets/blanket-orders-create-release.jpg",
        "caption": "The release wizard shows availability across active blankets and accepts the quantity requested for this shipment.",
        "steps": [
          "Open the active blanket order and select Release Partial Shipment.",
          "Verify the Customer.",
          "Enter the Requested Delivery Date and Customer Purchase Order.",
          "Leave Allocation Method as Oldest Blanket First unless the business process requires another method.",
          "In Qty to Release, enter the requested quantity for each product.",
          "Select Confirm Sales Order After Release only when the generated sales order should be confirmed immediately.",
          "Select Create Release."
        ]
      },
      {
        "title": "Verify the release and sales order",
        "image": "assets/blanket-orders-release-created.jpg",
        "caption": "The completed release records the allocated quantity, remaining agreement quantity, requested delivery date, and linked sales order.",
        "steps": [
          "Confirm the release record shows the correct Release Qty and Remaining After Release.",
          "Review Requested Lines and Blanket Allocations.",
          "Select the Sales Order smart button to open the generated order.",
          "Verify the customer PO, delivery date, products, quantities, prices, warehouse, and company.",
          "Confirm the sales order only after the customer release is approved.",
          "Return to the blanket order through the Blankets smart button to review released, delivered, and remaining quantities."
        ]
      }
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.6.3.2",
    "sandboxSourceVersion": "19.0.6.3.2",
    "productionSourceCommit": "f1f8d4c424e0e6843c2ad92ab85ebfe56866573c",
    "sandboxSourceCommit": "f1f8d4c424e0e6843c2ad92ab85ebfe56866573c",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.6.3.2; sandbox pins 19.0.6.3.2. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "barcode-program-operation-cards",
    "module": "barcode_program_operation_cards",
    "name": "Program Operations Dashboard & Barcode Cards",
    "version": "19.0.1.6.14",
    "category": "Programs & Sales",
    "repo": "barcode-program-operation-cards",
    "summary": "Tracks Program status and displays Program Names on warehouse Barcode operation cards.",
    "setup": [
      "Confirm the Programs feature is enabled for the operating company.",
      "Use Is a Project and Program Name on qualifying quotations and orders."
    ],
    "use": [
      "Open the Program dashboard to review active Program work.",
      "Use Barcode normally; operation cards display Program Name when one is assigned.",
      "Review ordered, picked, packed, and shipped status before updating downstream work.",
      "On Program Builder → Programs, review Fulfillment Status: Current Status uses Manual Status when present, otherwise Automatic Status. Set a manual override only to reflect reviewed operational progress.",
      "Select Use Automatic Status or clear Manual Status to remove the override. Manual Packing does not mean a stock transfer has been validated.",
      "Sales → Orders → Program Monitor opens the login-free wallboard for the configured monitor company. It shows limited Program information and refreshes every 60 seconds."
    ],
    "troubleshoot": [
      "If a Program is missing, confirm Is a Project is selected and Program Name is populated.",
      "If a Barcode card shows the customer, verify the transfer is linked to a Program order.",
      "A manual status override does not move stock, confirm an order, change an invoice or update the Program’s business state. Review real operations before relying on an override.",
      "The Program Monitor is public to anyone with its URL and is company-scoped; it is not a complete list of every company’s Programs. Do not add customer-sensitive content to the display."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.6.14",
    "sandboxSourceVersion": "19.0.1.6.14",
    "productionSourceCommit": "04d4e6a26193a977c7b036a2b5b3eb5f0f29691c",
    "sandboxSourceCommit": "04d4e6a26193a977c7b036a2b5b3eb5f0f29691c",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.6.14; sandbox pins 19.0.1.6.14. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "barcode-silk-zxing-fix",
    "module": "barcode_silk_zxing_fix",
    "name": "Barcode Silk ZXing Fix",
    "version": "19.0.1.0.1",
    "category": "Barcode & Printing",
    "repo": "barcode-silk-zxing-fix",
    "summary": "Forces Odoo camera barcode scanning to use ZXing on Zebra/Silk-style Android browsers.",
    "setup": [
      "Install the module and refresh web assets.",
      "Allow camera permission in the device browser.",
      "Use the rear-facing camera when the device offers a choice."
    ],
    "use": [
      "Open an Odoo Barcode scanning screen.",
      "Start the camera scanner and center the barcode in the preview.",
      "Use the zoom control when the barcode is small or distant."
    ],
    "troubleshoot": [
      "If the camera does not open, check browser camera permission.",
      "If scans are unreliable, improve lighting and hold the device steady.",
      "After upgrades, clear browser assets before retesting."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.0.1",
    "sandboxSourceVersion": "19.0.1.0.1",
    "productionSourceCommit": "def6bd3c9985efbba8bb7e3cf8ecbd67fdee2eb8",
    "sandboxSourceCommit": "def6bd3c9985efbba8bb7e3cf8ecbd67fdee2eb8",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.1; sandbox pins 19.0.1.0.1. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "cargo-architect",
    "module": "cargo_architect",
    "name": "Cargo Architect",
    "version": "19.0.4.2.3",
    "category": "Warehouse & Logistics",
    "repo": "Cargo-Architect",
    "summary": "Plans trailer loads, validates required quantities, calculates weight distribution, and produces loading reports.",
    "setup": [
      "Configure trailer and product presets.",
      "Confirm product dimensions, weights, stackability, and handling rules.",
      "Review axle, securement, and reporting defaults before live planning."
    ],
    "use": [
      "Create a load plan and select the trailer preset.",
      "Add items and required quantities to Items To Load.",
      "Run the optimizer, then review placements and required-item shortages.",
      "Adjust or lock placements as needed and verify engineering metrics.",
      "Approve the plan and print the selected report sections."
    ],
    "troubleshoot": [
      "Never approve a plan with required-item shortages.",
      "Verify product weights if axle results appear incorrect.",
      "Use optimizer diagnostics when required quantities cannot be placed."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.4.2.3",
    "sandboxSourceVersion": "19.0.4.2.3",
    "productionSourceCommit": "090d6658668b8a940894f54fd18e9882e2e9a2c0",
    "sandboxSourceCommit": "090d6658668b8a940894f54fd18e9882e2e9a2c0",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.4.2.3; sandbox pins 19.0.4.2.3. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "fleet-compliance-pro",
    "module": "commercial_vehicle_checklist",
    "name": "Fleet Compliance Pro",
    "version": "19.0.4.1.0",
    "category": "Fleet & Compliance",
    "repo": "Commercial-Vehicle-Checklist",
    "summary": "Manages vehicle inspection templates, driver reports, compliance status, signatures, and scheduled maintenance.",
    "setup": [
      "Create vehicle records and assign the appropriate checklist template.",
      "Configure inspection questions, required responses, and maintenance rules.",
      "Give drivers portal access when they will submit inspections externally."
    ],
    "use": [
      "Open Fleet Compliance and choose a vehicle.",
      "Start the required inspection and answer every mandatory item.",
      "Record defects, photos, notes, and signature where required.",
      "Submit the inspection and review any out-of-compliance workflow.",
      "Schedule corrective maintenance and close findings after repair."
    ],
    "troubleshoot": [
      "If a driver cannot see a vehicle, verify portal assignment and company access.",
      "If a template is empty, confirm it is active and assigned to the vehicle."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.4.1.0",
    "sandboxSourceVersion": "19.0.4.1.0",
    "productionSourceCommit": "cea0d1ee4bb3ee8e98063ecd62cfb238f835ebde",
    "sandboxSourceCommit": "cea0d1ee4bb3ee8e98063ecd62cfb238f835ebde",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.4.1.0; sandbox pins 19.0.4.1.0. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "contact-data-management-pro",
    "module": "contact_import_assistant",
    "name": "Contact Data Management Pro",
    "version": "19.0.3.2.4",
    "category": "Contacts & Data",
    "repo": "Contact-Data-Management-Pro",
    "summary": "Imports Outlook and Apple contact exports with duplicate detection, hierarchy handling, preview, and controlled application.",
    "setup": [
      "Export contacts in the supported Outlook or Apple format.",
      "Choose the correct Odoo company before importing.",
      "Decide whether email or phone should control duplicate matching."
    ],
    "use": [
      "Open the Contact Import Assistant.",
      "Upload the export file and run Preview.",
      "Review creates, updates, duplicates, salesperson assignments, and parent relationships.",
      "Correct source data or exclusions before selecting Apply."
    ],
    "troubleshoot": [
      "Resolve invalid parent-child relationships before applying.",
      "Normalize phone and email values when expected duplicates are not detected."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.3.2.4",
    "sandboxSourceVersion": "19.0.3.2.4",
    "productionSourceCommit": "f41d30dcb1ba54a82b735c17d520f5717ef22280",
    "sandboxSourceCommit": "f41d30dcb1ba54a82b735c17d520f5717ef22280",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.3.2.4; sandbox pins 19.0.3.2.4. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "custom-receipts-reports",
    "module": "custom_receipts_and_reports",
    "name": "Custom Receipts & Reports",
    "version": "19.0.2.2.15",
    "category": "Warehouse & Logistics",
    "repo": "custom-receipts-and-reports",
    "summary": "Adds receipt count sheets, barcode receipt forms, signatures, destination-location selection, and receiving reports.",
    "setup": [
      "Confirm receiving users have Inventory access.",
      "Review the destination locations available for the applicable warehouse.",
      "Configure required signature and printing behavior.",
      "Custom Receipts & Reports replaces the legacy Receipt Count Sheet through its migration flow. Do not activate both count-sheet implementations together."
    ],
    "use": [
      "Open the incoming receipt and select the Count Sheet or barcode workflow.",
      "Enter actual counted quantities in the correct units. Leave Receipt Destination Override empty to preserve native putaway and different destinations; choose an override only to direct receipt lines explicitly to that internal bin.",
      "Capture required receipt information. Where pricing approval applies, record physical arrival, obtain pricing confirmation and then complete final validation through the normal continuation dialogs.",
      "Print the count sheet or receiving report as required."
    ],
    "troubleshoot": [
      "If locations differ from the intended putaway, check whether Receipt Destination Override was explicitly selected. Leaving it empty preserves native destinations.",
      "If a report is blank, confirm the receipt has completed move lines."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.2.2.15",
    "sandboxSourceVersion": "19.0.2.2.15",
    "productionSourceCommit": "d14a11bf3bcd07b58f0f04c3ef1a1a0ee0aa201a",
    "sandboxSourceCommit": "d14a11bf3bcd07b58f0f04c3ef1a1a0ee0aa201a",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.2.2.15; sandbox pins 19.0.2.2.15. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "daily-received-items",
    "module": "daily_received_items_report",
    "name": "Daily Received Items Report",
    "version": "19.0.1.9.8",
    "category": "Reporting",
    "repo": "daily-received-items-report",
    "summary": "Shows daily physical arrivals and completed receipts, including pricing status and a link to finish receipt validation.",
    "setup": [
      "Confirm users can read the relevant receipts and stock move lines in the selected company.",
      "Confirm Daily Received Items 19.0.1.9.8 or newer is installed. The reports use Receipt Price Confirmation; Weekly Received Items also uses Daily Received Items.",
      "Physical arrivals are shown once Record Physical Arrival is saved. Goods not yet acknowledged as arrived are excluded."
    ],
    "use": [
      "Open Inventory → Daily Received Items in the correct company. The daily list uses today; the weekly list uses the current Monday-through-Sunday week in your user timezone.",
      "Review Received Date, Arrived Qty, Final Validation and Pricing for each item.",
      "Final Validation = Required means the receipt still needs final validation. Complete means the incoming receipt has been validated.",
      "Use the Requires Final Validation search filter to find pending receipts. Pricing shows whether price confirmation is still pending.",
      "Select Open to Validate on a pending row to open that receipt. An authorized reviewer confirms pricing when required, then validates the receipt using its normal controls.",
      "The link does not approve pricing or validate stock automatically. Printing labels also does not complete these steps.",
      "Refresh the report after validation. The status becomes Complete; the recorded arrival date remains the reporting date.",
      "Use Print List, Copy List, export or the standard Print menu when a copy is needed. PDF output also includes final-validation and pricing status."
    ],
    "troubleshoot": [
      "If a pending receipt is missing, confirm Record Physical Arrival was saved, the arrived quantity is positive, and the correct company and reporting period are selected.",
      "Received Date uses physical arrival when recorded; otherwise it uses final receipt completion. A receipt validated later stays with its original arrival day and week.",
      "Open to Validate appears only on receipts requiring final validation. Completed receipts show Complete instead.",
      "If pricing approval is pending, an Inventory or Purchase Administrator must confirm it. The report link does not bypass permissions or approval requirements.",
      "Arrived Qty can include goods still awaiting final validation. Use Final Validation = Complete when comparing with validated receipt totals; arrival alone does not make stock available."
    ],
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.9.8; sandbox pins 19.0.1.9.8. Source availability does not prove installation: check Odoo Apps for the installed state and version.",
    "statusGuide": [
      {
        "pricing": "Awaiting Price Confirmation",
        "validation": "Required",
        "next": "Select Open to Validate. An Inventory or Purchase Administrator opens Confirm Receipt Pricing, reviews each unit cost and confirms pricing. Then review quantities and validate the receipt."
      },
      {
        "pricing": "Pricing Confirmed",
        "validation": "Required",
        "next": "Pricing has been approved, but receiving is not complete. Select Open to Validate, review the receipt and choose Validate. Complete any backorder or other validation wizard that appears."
      },
      {
        "pricing": "Not Required",
        "validation": "Required",
        "next": "The warehouse does not require price confirmation for this receipt. Select Open to Validate, review quantities and validate through the normal receipt controls."
      },
      {
        "pricing": "Any displayed value",
        "validation": "Complete",
        "next": "The incoming receipt is already validated. No further receipt validation is needed. Complete any separate Storage or put-away transfer when applicable."
      }
    ],
    "statusNotes": [
      "Pricing and Final Validation describe the whole receipt. Products from the same receipt repeat those statuses; open the receipt once and validate it once.",
      "Recording physical arrival and printing barcode labels do not approve costs or complete receipt validation. Stock remains unreceived until the receipt is validated.",
      "If products or quantities change before final validation, pricing must be confirmed again. Refresh the report to see the current status.",
      "Open to Validate opens the normal receipt form and honors your permissions. If Confirm Receipt Pricing is unavailable, ask an Inventory or Purchase Administrator to review it.",
      "Use Requires Final Validation to find pending receipts, then read Pricing to distinguish receipts awaiting approval from those ready for final validation."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.9.8",
    "sandboxSourceVersion": "19.0.1.9.8",
    "productionSourceCommit": "8792e1c28d7b8442b4ec338c01ae3fdb59b34404",
    "sandboxSourceCommit": "8792e1c28d7b8442b4ec338c01ae3fdb59b34404"
  },
  {
    "slug": "dynamic-sandbox-systray",
    "module": "dynamic_sandbox_systray",
    "name": "Dynamic Sandbox Systray Link",
    "version": "19.0.1.0.0",
    "category": "Administration",
    "repo": "dynamic-sandbox-systray",
    "summary": "Provides an environment-aware shortcut for moving between sandbox and related Odoo resources.",
    "setup": [
      "Install only in environments where the shortcut is required.",
      "Confirm the target environment URL is correct."
    ],
    "use": [
      "Use the systray shortcut to open the configured related environment.",
      "Confirm the environment indicator before creating or editing records."
    ],
    "troubleshoot": [
      "If the shortcut is missing, refresh web assets and confirm the module is installed.",
      "Never assume a browser tab is sandbox; verify the hostname."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.0.0",
    "sandboxSourceVersion": "19.0.1.0.0",
    "productionSourceCommit": "a807115b2ed1f680705fc47cd91213cb6911b493",
    "sandboxSourceCommit": "a807115b2ed1f680705fc47cd91213cb6911b493",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.0; sandbox pins 19.0.1.0.0. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "field-label-duplicate-fixer",
    "module": "field_label_duplicate_fixer",
    "name": "Field Label Duplicate Fixer",
    "version": "19.0.1.0.1",
    "category": "Administration",
    "repo": "field-label-duplicate-fixer",
    "summary": "Helps administrators identify and correct duplicated field labels introduced by customizations.",
    "setup": [
      "Use in sandbox before correcting production metadata.",
      "Create a backup before bulk metadata changes."
    ],
    "use": [
      "Open the duplicate-label review tool.",
      "Review each duplicate and its model before selecting a correction.",
      "Apply the correction and retest affected forms and searches."
    ],
    "troubleshoot": [
      "Do not rename standard fields without confirming dependent views.",
      "If a view fails, restore the original label and review inherited views."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.0.1",
    "sandboxSourceVersion": "19.0.1.0.1",
    "productionSourceCommit": "79d8dd5ee010ea84bb07c8d5377deef6897597d1",
    "sandboxSourceCommit": "79d8dd5ee010ea84bb07c8d5377deef6897597d1",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.1; sandbox pins 19.0.1.0.1. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "free-product-program-portal",
    "module": "free_product_program_portal",
    "name": "Free Product Program Portal",
    "version": "19.0.1.0.58",
    "category": "Portal & Programs",
    "repo": "free-product-program-portal",
    "summary": "Runs branded, price-free product selection programs and consolidates submissions by store.",
    "setup": [
      "Create the Program and set start, end, and estimated ship dates.",
      "Import or enter store and SAP login values.",
      "Configure products, categories, levels, allowances, and age restrictions.",
      "Review delivery addresses and consolidation rules."
    ],
    "use": [
      "Open the public Program URL and sign in with store and SAP numbers.",
      "Complete age verification when prompted.",
      "Select products within the displayed category allowances.",
      "Review the bag and submit the selection.",
      "Use the thank-you page to confirm selections and estimated shipping."
    ],
    "troubleshoot": [
      "Check time zone and date fields when a Program incorrectly shows Not Started.",
      "Confirm products are both available and assigned to an allowed category."
    ],
    "walkthrough": [
      {
        "title": "Create a selection program",
        "image": "assets/screenshots/free-product-program-portal.jpg",
        "caption": "A new Selection Program form provides the starting point for dates, stores, and products.",
        "steps": [
          "Open the Selection Programs list and select New.",
          "Enter the program details and dates.",
          "Add stores, SAP values, products, categories, and allowances.",
          "Review the portal experience before sharing its URL."
        ]
      }
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.0.58",
    "sandboxSourceVersion": "19.0.1.0.58",
    "productionSourceCommit": "ccde6db679b6aba472574242de9eade8d08df58d",
    "sandboxSourceCommit": "ccde6db679b6aba472574242de9eade8d08df58d",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.58; sandbox pins 19.0.1.0.58. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "gratis-box-builder",
    "module": "gratis_box_builder",
    "name": "Gratis Box Builder",
    "version": "19.0.2.0.88",
    "category": "Programs & Sales",
    "repo": "gratis-box-builder",
    "summary": "Builds box programs, allocations, quote lines, Excel exports, and delayed products/BOMs from gratis planning data.",
    "setup": [
      "Configure Program Types and the applicable quotation template.",
      "Prepare stores, categories, items, allocations, and pricing inputs.",
      "Confirm openpyxl is available for spreadsheet features."
    ],
    "use": [
      "Create or open a Gratis Program.",
      "Enter store counts, category allocations, and program items.",
      "Generate or update the matrix and review calculated quantities.",
      "Create or update the linked quotation.",
      "Confirm the order only after the customer approves; products and BOMs are created at the controlled handoff."
    ],
    "troubleshoot": [
      "Rebuild the matrix after changing stores or allocations.",
      "If quote data is stale, use Update Quote and confirm the correct latest quote is linked."
    ],
    "walkthrough": [
      {
        "title": "Create a gratis program",
        "image": "assets/screenshots/gratis-box-builder.jpg",
        "caption": "A new Gratis Program form is ready for store and allocation planning.",
        "steps": [
          "Open Gratis Programs and select New.",
          "Enter program and store information.",
          "Add items and allocations, then review the generated matrix."
        ]
      }
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.2.0.88",
    "sandboxSourceVersion": "19.0.2.0.88",
    "productionSourceCommit": "2fbe3ebeaa68847e4dcced590f4b44442aeea9e5",
    "sandboxSourceCommit": "2fbe3ebeaa68847e4dcced590f4b44442aeea9e5",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.2.0.88; sandbox pins 19.0.2.0.88. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "inventory-relocator",
    "module": "inventory_multi_location_relocator",
    "name": "Inventory Multi-Location Relocator",
    "version": "19.0.1.0.11",
    "category": "Warehouse & Logistics",
    "repo": "inventory-multi-location-relocator",
    "summary": "Finds products stored across multiple locations and prepares suggested internal relocation transfers.",
    "setup": [
      "Confirm storage locations and warehouse structure are accurate.",
      "Review brand, aisle, and row conventions used for suggestions."
    ],
    "use": [
      "Run the multi-location inventory report.",
      "Filter to the relevant warehouse or storage area.",
      "Review suggested destination locations.",
      "Create the internal transfer and verify every move before validation.",
      "Manual relocation starts from the storage location with the lowest on-hand quantity; review the proposed destination and available quantities.",
      "When an open relocation already exists, review Relocation Assigned rather than creating a duplicate."
    ],
    "troubleshoot": [
      "The module creates a transfer but does not validate it automatically.",
      "Exclude transit, input, output, and non-storage locations from consolidation decisions.",
      "Use native transfer operations for lot/serial-tracked products so the required tracking can be selected."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.0.11",
    "sandboxSourceVersion": "19.0.1.0.11",
    "productionSourceCommit": "872056a304005f56b6d2ba617bd9617a82f9474f",
    "sandboxSourceCommit": "872056a304005f56b6d2ba617bd9617a82f9474f",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.11; sandbox pins 19.0.1.0.11. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "invoice-aging-group",
    "module": "invoice_aging_group",
    "name": "Invoice Aging Group",
    "version": "19.0.1.0.0",
    "category": "Accounting & Reporting",
    "repo": "invoice-aging-group",
    "summary": "Adds aging-oriented grouping to invoice views for easier receivable review.",
    "setup": [
      "Confirm accounting users have invoice access.",
      "Review the aging basis and due dates before using grouped totals."
    ],
    "use": [
      "Open the applicable invoice list.",
      "Choose the Invoice Aging grouping from the search menu.",
      "Expand aging groups and follow up on overdue items."
    ],
    "troubleshoot": [
      "Incorrect due dates create misleading aging groups.",
      "Check company and invoice-state filters when totals differ from accounting reports."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.0.0",
    "sandboxSourceVersion": "19.0.1.0.0",
    "productionSourceCommit": "b82a03cf7d892c060e93a96a2147503712a04bd6",
    "sandboxSourceCommit": "b82a03cf7d892c060e93a96a2147503712a04bd6",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.0; sandbox pins 19.0.1.0.0. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "chatter-resize",
    "module": "kr2_chatter_resize",
    "name": "Chatter Resize",
    "version": "19.0.1.0.9",
    "category": "User Interface",
    "repo": "kr2-chatter-resize",
    "summary": "Allows users to resize the Odoo chatter area for forms that need more working space.",
    "setup": [
      "Install the module and refresh browser assets.",
      "No business configuration is normally required."
    ],
    "use": [
      "Open a form with chatter. When chatter is on the side, drag the divider to adjust its width.",
      "If chatter appears below the form, widen or maximize the browser, or reduce browser zoom to provide enough horizontal room.",
      "The divider adjusts chatter size; the form layout also depends on window width and Odoo’s responsive layout."
    ],
    "troubleshoot": [
      "If dragging has no effect, hard-refresh the browser assets.",
      "Check for conflicting interface customizations after Odoo upgrades.",
      "There is no documented side/bottom toggle in this module. Check window width and browser zoom before changing settings."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.0.9",
    "sandboxSourceVersion": "19.0.1.0.9",
    "productionSourceCommit": "d62ce22812e7425afdf0f696cd092a343db3aae4",
    "sandboxSourceCommit": "d62ce22812e7425afdf0f696cd092a343db3aae4",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.9; sandbox pins 19.0.1.0.9. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "odoo-qz-sato-label",
    "module": "odoo_qz_sato_label",
    "name": "QZ Printing and SATO Labels",
    "version": "19.0.1.1.1",
    "category": "Barcode & Printing",
    "repo": "odoo-qz-sato-label",
    "summary": "Prints PDF reports and SATO product labels through the existing QZ server, with optional printer defaults by warehouse and report.",
    "setup": [
      "In Settings → QZ Printing, Print documents through QZ enables the printer selector for PDF reports. The separate Default document printer is optional.",
      "An administrator can open Inventory → Configuration → QZ Printer Rules to assign the company, warehouse, PDF report, exact QZ queue name and copies. More specific rules take priority.",
      "An administrator installs QZ Tray and each separately named Windows printer queue on the print server. Tablets use those queues and do not need local printer installation.",
      "In Settings → QZ Printing, enter the QZ print server hostname without a protocol or port. Use the hostname that matches its connection certificate.",
      "An administrator configures the signing certificate and matching private key in Odoo. The private key must not be copied to tablets or shared in support screenshots.",
      "Make sure each tablet can reach the print server and trusts its connection certificate. A signing certificate in Odoo does not install connection trust on a tablet.",
      "In Amazon Silk, open site permissions for the Odoo website and set Local network access to Allow. If Silk asks for permission when connecting, select Allow.",
      "Repeat Silk permission setup on every tablet, separately for the sandbox and production Odoo websites. Refresh Odoo after changing a permission.",
      "Match the Odoo DPI setting to the selected printer: 203 or 305 DPI. Test label alignment and scanning before normal use."
    ],
    "use": [
      "Print a delivery slip, quotation, invoice or another PDF report. In Print with QZ, select the printer and copies, then select Print. Opening the chooser does not send a physical job.",
      "Warehouse/company batches show separate document groups. Check each printer. Missing or unavailable defaults require a choice and never use the SATO queue automatically.",
      "Choose Download PDF for review or saving, including when QZ is unavailable. Email attachments, exports and browser page printing keep their existing behavior.",
      "In Odoo Barcode → Operations → Receipts, open the correct receipt and scan or enter the quantities that physically arrived.",
      "For a warehouse requiring receipt pricing approval, select Validate to open Receipt Acknowledgment, then select Record Physical Arrival.",
      "The label dialog opens after physical arrival is recorded. Enter how many labels you want for each product; use 0 to skip an item.",
      "Choose the Windows printer queue from the QZ server and select Print Labels, or choose Skip Printing. Check the printed barcode and alignment.",
      "Arrival labels do not confirm pricing, complete the receipt, or make stock available. An authorized reviewer must confirm pricing, then the receipt must be validated.",
      "The automatic label offer is not repeated at final validation once it was offered at arrival. The completed receipt still has a Print SATO Labels action for manual reprints.",
      "For product-only printing, open Print SATO Labels from the product action, choose the printer and quantity, and select Print Now."
    ],
    "troubleshoot": [
      "In Silk, QZ Tray is not connected: check Local network access for the Odoo website. Ask first is not an existing permission grant; allow the connection, refresh Odoo and reconnect.",
      "A working desktop does not prove a tablet is configured. Each tablet and each Odoo website needs its own browser permission.",
      "Open the QZ server About page on the tablet using the configured hostname and secure port. An About page reached after a certificate warning does not prove the connection certificate is trusted.",
      "Confirm the dialog shows the intended QZ server. Use Reconnect when available; a disabled printer list means connection or printer discovery has not finished.",
      "If the dialog asks you to check an approval prompt, inspect QZ Tray on the print server desktop. Ask an administrator to check signing configuration and QZ logs if no prompt appears.",
      "Labels at physical arrival require the Receipt Price Confirmation workflow and QZ SATO Labels 19.0.1.0.8 or newer. Older versions offer labels only after final validation.",
      "Match the printer DPI to avoid incorrect label sizing. Do not change the server certificate or disable secure connections to troubleshoot a tablet permission."
    ],
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.1.1; sandbox pins 19.0.1.1.1. Source availability does not prove installation: check Odoo Apps for the installed state and version.",
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.1.1",
    "sandboxSourceVersion": "19.0.1.1.1",
    "productionSourceCommit": "c30ee0e94789833271ba9ac2578eec3d13865e9c",
    "sandboxSourceCommit": "c30ee0e94789833271ba9ac2578eec3d13865e9c"
  },
  {
    "slug": "print-list-view",
    "module": "print_list_view",
    "name": "Print Current List View",
    "version": "19.0.1.2.0",
    "category": "Reporting",
    "repo": "print-list-view",
    "summary": "Prints the currently filtered and arranged Odoo list view.",
    "setup": [
      "Grant users access to the underlying model and records.",
      "Arrange visible columns before printing."
    ],
    "use": [
      "Open the desired list and apply filters, groups, and sorting.",
      "Choose the current-list print action.",
      "Review the print preview and print or save as PDF."
    ],
    "troubleshoot": [
      "Only accessible records can appear.",
      "Adjust browser print orientation when wide lists are clipped."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.2.0",
    "sandboxSourceVersion": "19.0.1.2.0",
    "productionSourceCommit": "50545d94b4ffea4b3d23023a342213b54f185341",
    "sandboxSourceCommit": "50545d94b4ffea4b3d23023a342213b54f185341",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.2.0; sandbox pins 19.0.1.2.0. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "product-barcode-brand-lookup",
    "module": "product_barcode_brand_lookup",
    "name": "Product Barcode Brand Lookup",
    "version": "19.0.1.6.1",
    "category": "Products & Inventory",
    "repo": "product-barcode-brand-lookup",
    "summary": "Adds product barcode enrichment for the specifically configured Insight-owned products, while preserving ordinary local barcode scanning for other products.",
    "setup": [
      "Review product barcode uniqueness and brand assignments.",
      "Give users product read or edit rights appropriate to their role.",
      "External enrichment is limited by product owner to the configured Insight companies. Foresight-owned and shared products do not make external lookup requests, regardless of the company selected in the header."
    ],
    "use": [
      "Open an eligible product and select Update Barcode Info when an external lookup is required.",
      "Review barcode lookup brand, external size, external weight, source and update time after the form reloads.",
      "Use ordinary Odoo barcode scanning for local product lookup in every company. External enrichment and local scanning are separate features."
    ],
    "troubleshoot": [
      "Duplicate barcodes must be corrected on the product records.",
      "If no product is found, check barcode formatting and company visibility.",
      "For Foresight-owned or shared products, no external enrichment is expected. Do not change product company ownership merely to trigger a lookup."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.6.1",
    "sandboxSourceVersion": "19.0.1.6.1",
    "productionSourceCommit": "ecf22f9b2668ac5edca9739d81472f6e39fdcfe0",
    "sandboxSourceCommit": "ecf22f9b2668ac5edca9739d81472f6e39fdcfe0",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.6.1; sandbox pins 19.0.1.6.1. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "product-inventory-quick-report",
    "module": "product_inventory_quick_report",
    "name": "Product Inventory Quick Report",
    "version": "19.0.1.1.20",
    "category": "Products & Inventory",
    "repo": "product-inventory-quick-report",
    "summary": "Provides a product-level interactive inventory report with configurable dates and transaction detail.",
    "setup": [
      "Confirm users have access to products, stock, purchases, sales, and accounting data used by the report.",
      "Review the default reporting date range before relying on totals."
    ],
    "use": [
      "Open a product and launch the Quick Report action.",
      "Set the date range and filters.",
      "Review inventory movements and related transaction details.",
      "Print or export the result when required."
    ],
    "troubleshoot": [
      "Check the date range when historical transactions are absent.",
      "Company access rules may hide transactions belonging to another company."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.1.20",
    "sandboxSourceVersion": "19.0.1.1.20",
    "productionSourceCommit": "e7bda3406ad227834ad662c1939bd17225ff1df8",
    "sandboxSourceCommit": "e7bda3406ad227834ad662c1939bd17225ff1df8",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.1.20; sandbox pins 19.0.1.1.20. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "program-builder",
    "module": "program_builder",
    "name": "Program Builder",
    "version": "19.0.1.0.52",
    "category": "Programs & Sales",
    "repo": "program-builder",
    "summary": "Creates and manages multi-kit Programs from quotation through warehouse execution and invoicing.",
    "setup": [
      "Enable Use Programs for the correct company.",
      "Open Program Builder → Configuration → Program Types and configure the program code, default quotation template, analytic plan, and default profit percentage.",
      "Confirm customers, quotation templates, carrier/vendor choices, and program dates are available in the active company."
    ],
    "use": [
      "Create a Program and enter its type, customer, customer PO, start date, due date, and event date.",
      "Complete the Schedule and Quote Details tabs before creating a quotation.",
      "Use Create Quote, then review the linked quotation from the Quotes / Orders smart button.",
      "Monitor revenue, costs, gross profit, and margin on the Financials tab.",
      "Enter freight estimates and actual freight costs before completing the program.",
      "Event Week can be entered manually, including without an Event Date. Review the date and week together when both are supplied."
    ],
    "troubleshoot": [
      "If Create Quote is unavailable or produces incomplete data, confirm the customer, program type, and default quotation template.",
      "If financial totals are zero, verify the quotation, purchase orders, invoices, and vendor bills are linked to the program.",
      "If the Program is absent from dashboards, verify the company, program number, and active status.",
      "Program .54 workbook importing belongs in Program Builder Store Items; match products before generating a quotation. Do not expect arbitrary program files or this sandbox-only importer in production .52."
    ],
    "walkthrough": [
      {
        "title": "Configure a program type",
        "image": "assets/program-builder-program-types.jpg",
        "caption": "Program Types define the program code, default quotation template, analytic plan, and default profit percentage.",
        "steps": [
          "Open Program Builder.",
          "Choose Configuration → Program Types.",
          "Select New, or open the type that should be updated.",
          "Enter a clear Name and short Code.",
          "Select the Default Quotation Template and Analytic Plan.",
          "Enter the Default Profit Percentage, then save."
        ]
      },
      {
        "title": "Open the program register",
        "image": "assets/program-builder-programs-list.jpg",
        "caption": "The Programs list shows the program number, customer, status, dates, and financial totals in one register.",
        "steps": [
          "Choose Programs in the top menu.",
          "Use Search to find a program by number, name, customer, type, or status.",
          "Review due date, event date, quoted revenue, invoices, bills, gross profit, and margin.",
          "Select New to begin a program."
        ]
      },
      {
        "title": "Create the program",
        "image": "assets/program-builder-new-program.jpg",
        "caption": "A new Program starts in Planning and provides controls for quoting, approval, duplication, and linked commercial documents.",
        "steps": [
          "Enter the Program Name.",
          "Select the Program Type and Customer.",
          "Enter the Customer PO number.",
          "Set Start Date and Due Date; add Event Date when applicable.",
          "Verify the Company and linked analytic account.",
          "For gratis work, create or link the Gratis Program.",
          "Save the record; Odoo assigns the Program Number."
        ]
      },
      {
        "title": "Build the schedule",
        "image": "assets/program-builder-schedule.jpg",
        "caption": "The Schedule tab records material, packing, distribution, and event milestones.",
        "steps": [
          "Open the Schedule tab.",
          "Enter Product In House and Printed Materials Supplied by Customer dates using the start date of the applicable week.",
          "Enter Packing Signoff and Packing Approval dates.",
          "Enter Drop Date and the Store Arrival Start and End dates.",
          "Enter Event Date when known and review or enter Event Week manually; an Event Date is not required to enter a week.",
          "Save after each scheduling update."
        ]
      },
      {
        "title": "Complete quote and shipping details",
        "image": "assets/program-builder-quote-details.jpg",
        "caption": "Quote Details holds store counts, box and label specifications, account instructions, and receiving information.",
        "steps": [
          "Open the Quote Details tab.",
          "Enter the number of stores, corporate/field recipients, and total boxes.",
          "Enter label color, box color, and colored-label instructions.",
          "Record when the distribution list was supplied.",
          "Enter the UPS/FedEx account instructions.",
          "Verify the receiving address, dock hours, contact, and appointment requirements in Shipping Details.",
          "Save the program."
        ]
      },
      {
        "title": "Create and track the quotation",
        "image": "assets/program-builder-financials.jpg",
        "caption": "The Financials tab consolidates linked revenue, invoices, customer freight, vendor commitments, bills, and profitability.",
        "steps": [
          "Select Create Quote at the top of the program.",
          "Open the generated quotation from the Quotes / Orders smart button.",
          "Review the customer, customer PO, products, quantities, prices, program reference, and company.",
          "Return to the Program and select Quoted when the quotation is ready for the customer.",
          "Use Approve after customer approval, following company policy.",
          "Open Financials to monitor quoted/ordered revenue, customer invoices, customer freight, purchase commitments, vendor bills, actual freight cost, gross profit, and gross margin."
        ]
      },
      {
        "title": "Record freight and finish the program",
        "image": "assets/program-builder-freight.jpg",
        "caption": "The Freight tab compares estimated and actual freight and records vendor-level charges or markups.",
        "steps": [
          "Open the Freight tab.",
          "Review Estimated Freight and Actual Freight Cost.",
          "Select Add a line for each carrier or freight vendor.",
          "Enter the date, carrier/vendor, reference, description, actual cost, markup percentage, and customer charge.",
          "Use the Quotes / Orders, Purchase Orders, Invoices, and Vendor Bills smart buttons to confirm all commercial records are linked.",
          "Move the program through In Production and Complete only after the required operational and financial checks are finished."
        ]
      }
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.0.52",
    "sandboxSourceVersion": "19.0.1.0.54",
    "productionSourceCommit": "9f86d5683a27c4aef9afd4060dde09dfb638d517",
    "sandboxSourceCommit": "9436f0ecce5811c4ba62cda53106a2d8a00b0d5c",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.52; sandbox pins 19.0.1.0.54. Source availability does not prove installation: check Odoo Apps for the installed state and version. The Store Program Excel importer in .54 remains sandbox-only and is excluded from the prepared October 22 production release."
  },
  {
    "slug": "receipt-count-sheet",
    "module": "receipt_count_sheet",
    "name": "Receipt Count Sheet",
    "version": "19.0.1.0.24",
    "category": "Warehouse & Logistics",
    "repo": "receipt-count-sheet",
    "summary": "Provides a count-sheet-first receiving workflow for incoming transfers.",
    "setup": [
      "Confirm the Count Sheet tab and printing defaults match the warehouse process.",
      "Review user permissions for receipts and move lines."
    ],
    "use": [
      "Open an incoming receipt.",
      "Use the Count Sheet to record physical quantities.",
      "Reconcile differences and update receipt quantities.",
      "Print the sheet and validate the receipt when approved."
    ],
    "troubleshoot": [
      "If lines are missing, confirm products exist on the receipt.",
      "Do not validate until physical discrepancies are resolved."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.0.24",
    "sandboxSourceVersion": "19.0.1.0.24",
    "productionSourceCommit": "064e351188f6eec94047db684ae8e1a79c7f40a1",
    "sandboxSourceCommit": "064e351188f6eec94047db684ae8e1a79c7f40a1",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.24; sandbox pins 19.0.1.0.24. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "user-app-icon-visibility",
    "module": "user_app_icon_visibility",
    "name": "User App Icon Visibility",
    "version": "19.0.1.0.2",
    "category": "Administration",
    "repo": "user_app_icon_visibility",
    "summary": "Lets each user hide or show authorized Odoo application icons without changing security permissions.",
    "setup": [
      "Install the module and refresh web assets.",
      "Users retain their existing security groups; visibility is cosmetic only."
    ],
    "use": [
      "Open the personal app-visibility preferences.",
      "Hide applications that are not needed in the launcher.",
      "Save and refresh the launcher."
    ],
    "troubleshoot": [
      "Hidden icons do not revoke access to menus or records.",
      "If preferences do not apply, refresh assets and sign in again."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.0.2",
    "sandboxSourceVersion": "19.0.1.0.2",
    "productionSourceCommit": "4f6f7353b6b5767944b9e38983d4f2f569a9638f",
    "sandboxSourceCommit": "4f6f7353b6b5767944b9e38983d4f2f569a9638f",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.2; sandbox pins 19.0.1.0.2. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "warehouse-location-map",
    "module": "warehouse_location_map",
    "name": "Warehouse Location Map",
    "version": "19.0.3.6.4",
    "category": "Warehouse & Logistics",
    "repo": "warehouse-location-map",
    "summary": "Displays zones, lanes, spots, products, and barcodes on an interactive warehouse location map.",
    "setup": [
      "Create the warehouse layout and map zones, lanes, and spots to Odoo locations.",
      "Verify location barcodes and product quantities."
    ],
    "use": [
      "Open the Warehouse Location Map.",
      "Select the warehouse or zone.",
      "Search by product, barcode, or location.",
      "Select a map position to review location details and stock."
    ],
    "troubleshoot": [
      "Unmapped locations will not appear correctly.",
      "Recheck image sizing and layout coordinates when the map is misaligned."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.3.6.4",
    "sandboxSourceVersion": "19.0.3.6.4",
    "productionSourceCommit": "6e50f6969a112a96311536c6c6c604322931de6f",
    "sandboxSourceCommit": "6e50f6969a112a96311536c6c6c604322931de6f",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.3.6.4; sandbox pins 19.0.3.6.4. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "warehouse-operations-dashboard-pro",
    "module": "warehouse_operations_dashboard_pro",
    "name": "Warehouse Operations Dashboard Pro",
    "version": "19.0.1.0.40",
    "category": "Warehouse & Logistics",
    "repo": "warehouse-operations-dashboard-pro",
    "summary": "Shows large-screen warehouse operation cards by warehouse and stage, with controlled visual reordering.",
    "setup": [
      "Configure included warehouses, companies, locations, and operation sections.",
      "Open the public dashboard URL on the display device.",
      "Use browser full-screen mode on the warehouse TV."
    ],
    "use": [
      "Review daily totals and operation cards by warehouse.",
      "Select Move on a card, then Place Here or Place at End.",
      "Use the dashboard as a visual priority board; complete transfers in Odoo Barcode or Inventory."
    ],
    "troubleshoot": [
      "Dashboard reordering changes display order only.",
      "If counts differ, verify warehouse, company, state, and location filters."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.0.40",
    "sandboxSourceVersion": "19.0.1.0.40",
    "productionSourceCommit": "83defc6d2bce313aa018f33d01fa26c742bc6c1d",
    "sandboxSourceCommit": "83defc6d2bce313aa018f33d01fa26c742bc6c1d",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.40; sandbox pins 19.0.1.0.40. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "weekly-received-items",
    "module": "weekly_received_items_report",
    "name": "Weekly Received Items Report",
    "version": "19.0.1.0.3",
    "category": "Reporting",
    "repo": "weekly-received-items-report",
    "summary": "Shows weekly physical arrivals and completed receipts, including pricing status and a link to finish receipt validation.",
    "setup": [
      "Confirm users can read the relevant receipts and stock move lines in the selected company.",
      "Confirm Weekly Received Items 19.0.1.0.3 or newer is installed. The reports use Receipt Price Confirmation; Weekly Received Items also uses Daily Received Items.",
      "Physical arrivals are shown once Record Physical Arrival is saved. Goods not yet acknowledged as arrived are excluded."
    ],
    "use": [
      "Open Inventory → Weekly Received Items in the correct company. The daily list uses today; the weekly list uses the current Monday-through-Sunday week in your user timezone.",
      "Review Received Date, Arrived Qty, Final Validation and Pricing for each item.",
      "Final Validation = Required means the receipt still needs final validation. Complete means the incoming receipt has been validated.",
      "Use the Requires Final Validation search filter to find pending receipts. Pricing shows whether price confirmation is still pending.",
      "Select Open to Validate on a pending row to open that receipt. An authorized reviewer confirms pricing when required, then validates the receipt using its normal controls.",
      "The link does not approve pricing or validate stock automatically. Printing labels also does not complete these steps.",
      "Refresh the report after validation. The status becomes Complete; the recorded arrival date remains the reporting date.",
      "Use Print List, Copy List, export or the standard Print menu when a copy is needed. PDF output also includes final-validation and pricing status."
    ],
    "troubleshoot": [
      "If a pending receipt is missing, confirm Record Physical Arrival was saved, the arrived quantity is positive, and the correct company and reporting period are selected.",
      "Received Date uses physical arrival when recorded; otherwise it uses final receipt completion. A receipt validated later stays with its original arrival day and week.",
      "Open to Validate appears only on receipts requiring final validation. Completed receipts show Complete instead.",
      "If pricing approval is pending, an Inventory or Purchase Administrator must confirm it. The report link does not bypass permissions or approval requirements.",
      "Arrived Qty can include goods still awaiting final validation. Use Final Validation = Complete when comparing with validated receipt totals; arrival alone does not make stock available."
    ],
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.3; sandbox pins 19.0.1.0.3. Source availability does not prove installation: check Odoo Apps for the installed state and version.",
    "statusGuide": [
      {
        "pricing": "Awaiting Price Confirmation",
        "validation": "Required",
        "next": "Select Open to Validate. An Inventory or Purchase Administrator opens Confirm Receipt Pricing, reviews each unit cost and confirms pricing. Then review quantities and validate the receipt."
      },
      {
        "pricing": "Pricing Confirmed",
        "validation": "Required",
        "next": "Pricing has been approved, but receiving is not complete. Select Open to Validate, review the receipt and choose Validate. Complete any backorder or other validation wizard that appears."
      },
      {
        "pricing": "Not Required",
        "validation": "Required",
        "next": "The warehouse does not require price confirmation for this receipt. Select Open to Validate, review quantities and validate through the normal receipt controls."
      },
      {
        "pricing": "Any displayed value",
        "validation": "Complete",
        "next": "The incoming receipt is already validated. No further receipt validation is needed. Complete any separate Storage or put-away transfer when applicable."
      }
    ],
    "statusNotes": [
      "Pricing and Final Validation describe the whole receipt. Products from the same receipt repeat those statuses; open the receipt once and validate it once.",
      "Recording physical arrival and printing barcode labels do not approve costs or complete receipt validation. Stock remains unreceived until the receipt is validated.",
      "If products or quantities change before final validation, pricing must be confirmed again. Refresh the report to see the current status.",
      "Open to Validate opens the normal receipt form and honors your permissions. If Confirm Receipt Pricing is unavailable, ask an Inventory or Purchase Administrator to review it.",
      "Use Requires Final Validation to find pending receipts, then read Pricing to distinguish receipts awaiting approval from those ready for final validation."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.0.3",
    "sandboxSourceVersion": "19.0.1.0.3",
    "productionSourceCommit": "d44330aadd4bbd6b878e26ab792c6bcc7e8c156f",
    "sandboxSourceCommit": "d44330aadd4bbd6b878e26ab792c6bcc7e8c156f"
  },
  {
    "slug": "woo-commerce-order-import",
    "module": "woo_commerce_order_import",
    "name": "WooCommerce Order Import",
    "version": "19.0.1.0.24",
    "category": "Commerce & Integration",
    "repo": "woo-commerce-order-import",
    "summary": "Imports WooCommerce orders and pushes Odoo product data, images, attributes, and Program metadata.",
    "setup": [
      "Create the WooCommerce store configuration and API credentials.",
      "Set the correct Odoo company and project rules.",
      "Choose SSL verification behavior and test the connection.",
      "Review product matching, brand, size, barcode, weight, images, and program_name metadata."
    ],
    "use": [
      "Open the WooCommerce staging or import screen.",
      "Fetch orders and review customer, product, project, tax, and shipping mappings.",
      "Resolve exceptions before creating Odoo orders.",
      "Use product push only after reviewing the destination store and product data.",
      "Check integration logs after every batch."
    ],
    "troubleshoot": [
      "Company mismatches must be corrected before import.",
      "Use logs to diagnose authentication, SSL, product-match, and image-upload failures."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.0.24",
    "sandboxSourceVersion": "19.0.1.0.24",
    "productionSourceCommit": "df7b0c4233103ee09278a1b2c43eb7be4e707432",
    "sandboxSourceCommit": "df7b0c4233103ee09278a1b2c43eb7be4e707432",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.24; sandbox pins 19.0.1.0.24. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "sales-tax-liability-state",
    "module": "sales_tax_liability_state",
    "name": "Sales Tax Liability by State",
    "version": "19.0.1.0.2",
    "category": "Accounting & Reporting",
    "repo": "sales-tax-liability-state",
    "summary": "Reports sales tax liability by state from posted accounting entries and configured tax-state mappings.",
    "setup": [
      "In Accounting → Configuration → Taxes, assign the correct Tax State to applicable taxes.",
      "In Accounting → Configuration → State Sales Tax Liability Accounts, map each company and state to the payable accounts used for filing.",
      "Confirm the active company and accounting access before running the report."
    ],
    "use": [
      "Open Accounting → Reporting → Taxes & Fiscal → Sales Tax Liability by State.",
      "Choose the company, date range, and state source.",
      "Preview the results and reconcile them to the mapped payable accounts.",
      "Export PDF or CSV only after reviewing the state totals."
    ],
    "troubleshoot": [
      "A missing state usually means its tax or account mapping is incomplete.",
      "Check the company, posted-entry status, date range, and state source if totals differ from the ledger."
    ],
    "walkthrough": [
      {
        "title": "Set report options",
        "image": "assets/screenshots/sales-tax-liability-wizard.jpg",
        "caption": "The report dialog lets you choose the company, period, and state source before previewing.",
        "steps": [
          "Open the Sales Tax Liability by State report.",
          "Select the company and reporting period.",
          "Choose the state source and preview the results."
        ]
      }
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.0.2",
    "sandboxSourceVersion": "19.0.1.0.2",
    "productionSourceCommit": "67e6129f47bde1418d5a626b5acd39f5f0b25c8d",
    "sandboxSourceCommit": "67e6129f47bde1418d5a626b5acd39f5f0b25c8d",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.2; sandbox pins 19.0.1.0.2. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "customer-balance-statements",
    "module": "customer_balance_statements",
    "name": "Customer Balance Statements",
    "version": "19.0.1.1.1",
    "category": "Accounting & Reporting",
    "repo": "customer-balance-statements",
    "summary": "Prepares customer balance statements for review, PDF download, and optional scheduled email.",
    "setup": [
      "Open Settings → Users & Companies → Companies → Customer Statements for each company.",
      "Keep monthly statement email disabled until that company approves sending.",
      "Confirm accounting permissions and the customer email addresses before any optional delivery."
    ],
    "use": [
      "Open Accounting → Customers → Prepare Balance Statements.",
      "Choose the company, cutoff date, and customers, then select Prepare and Review.",
      "Preview the PDF and verify the balances before downloading or sending.",
      "Use the queue or monthly schedule only when the company has approved statement delivery."
    ],
    "troubleshoot": [
      "If a customer is absent, check the company, cutoff date, and qualifying balance.",
      "Review zero and credit balances before assuming a statement should be generated.",
      "If delivery is unavailable, check the company email setting and customer address."
    ],
    "walkthrough": [
      {
        "title": "Prepare statements for review",
        "image": "assets/screenshots/customer-balance-statements-wizard.jpg",
        "caption": "The blank preparation dialog shows the company, date, and customer options without sending email.",
        "steps": [
          "Open Prepare Balance Statements.",
          "Choose the company and cutoff date.",
          "Select Prepare and Review to inspect the PDF before any delivery."
        ]
      }
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.1.1",
    "sandboxSourceVersion": "19.0.1.1.1",
    "productionSourceCommit": "16078beeed2614f2126fcdcf279f8b0f4db55872",
    "sandboxSourceCommit": "16078beeed2614f2126fcdcf279f8b0f4db55872",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.1.1; sandbox pins 19.0.1.1.1. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "celestial-3pl-fulfillment",
    "module": "celestial_3pl_fulfillment",
    "name": "Celestial 3PL Fulfillment",
    "version": "19.0.1.0.3",
    "category": "Warehouse & Logistics",
    "repo": "celestial-3pl-fulfillment",
    "summary": "Manages controlled release of outgoing deliveries to Celestial 3PL and records shipment confirmation.",
    "setup": [
      "Open Inventory → Configuration → Celestial 3PL Setup.",
      "Select the exact company and warehouse, then review the address and dispatch email.",
      "Use Preview and Enable only after the business approves the 3PL routing; the integration starts inactive."
    ],
    "use": [
      "Open the selected outgoing delivery and print the 3PL Pick List.",
      "Review the delivery and use Send to Celestial when the release is approved.",
      "After the release is recorded sent and actual shipment evidence arrives, open Confirm 3PL Shipment. Enter actual quantities, explicitly acknowledge the review, and complete native backorder decisions when applicable.",
      "Use native backorders for partial shipments and review the remaining quantities.",
      "Print Delivery Slip on an outgoing delivery, or Print Delivery Slips for selected delivery-list rows, downloads the current document without validating stock or sending a release."
    ],
    "troubleshoot": [
      "If the action is absent, check the company, warehouse, delivery type, and enabled setup.",
      "Do not confirm shipment before receiving evidence of actual quantities.",
      "Vendor receipts are outside this outgoing 3PL workflow."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.0.3",
    "sandboxSourceVersion": "19.0.1.0.3",
    "productionSourceCommit": "85081a0cdc217ad96972ff4b982bbb4a9bc4874c",
    "sandboxSourceCommit": "0d7e793fb733a8e6856e2c9bb98d21b78ad4dcc5",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.3; sandbox pins 19.0.1.0.3. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "receipt-price-confirmation",
    "module": "receipt_price_confirmation",
    "name": "Receipt Price Confirmation",
    "version": "19.0.1.0.5",
    "category": "Warehouse & Logistics",
    "repo": "receipt-price-confirmation",
    "summary": "Adds an optional warehouse-level price review between physical receipt and inventory validation.",
    "setup": [
      "Open Inventory → Configuration → Warehouses and select the warehouse.",
      "Enable Require Price Confirmation Before Receipt for that warehouse and save.",
      "Confirm that an authorized pricing reviewer can access the confirmation queue."
    ],
    "use": [
      "In Odoo Barcode, scan the supplier receipt and enter the actual arrived quantities.",
      "Select Validate to open Receipt Acknowledgment, then Record Physical Arrival. Stock remains unreceived and unavailable.",
      "When QZ SATO Labels 19.0.1.0.8 or newer is installed, choose label quantities and a server printer in the label dialog, or choose Skip Printing.",
      "An Inventory or Purchase Administrator opens Confirm Receipt Pricing, reviews costs and confirms pricing.",
      "Validate the receipt after pricing approval and quantity review. Changes to products or quantities require pricing to be confirmed again.",
      "Use Daily Received Items or Weekly Received Items to review Final Validation and Pricing. Open to Validate takes you to the receipt and its normal approval controls."
    ],
    "troubleshoot": [
      "If the price step does not appear, verify the setting on the receipt warehouse.",
      "Check the reviewer’s permissions if Confirm Pricing is unavailable.",
      "Do not validate a receipt with unresolved quantity or cost differences."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.0.5",
    "sandboxSourceVersion": "19.0.1.0.5",
    "productionSourceCommit": "a3b2996ebacba311ca86f9efb9fc3da3c34aeedf",
    "sandboxSourceCommit": "a3b2996ebacba311ca86f9efb9fc3da3c34aeedf",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.5; sandbox pins 19.0.1.0.5. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "warehouse-location-pick-routing",
    "module": "warehouse_location_pick_routing",
    "name": "Warehouse Location Pick Routing",
    "version": "19.0.1.0.12",
    "category": "Warehouse & Logistics",
    "repo": "warehouse-location-pick-routing",
    "summary": "Routes eligible 170/Stock to 170/Output picks through 160 crew location tickets while preserving reservations.",
    "setup": [
      "Confirm the source and destination locations and 160 crew locations match the warehouse routing design.",
      "This module is explicitly installed; adding its source does not auto-install it merely because sale_stock exists. Existing installed routing stays active after an upgrade."
    ],
    "use": [
      "Open an eligible outgoing pick and review the generated location-level child tickets.",
      "Work each child ticket from its assigned source location and record the actual picked quantities.",
      "Review remaining quantities and backorders before completing the parent delivery."
    ],
    "troubleshoot": [
      "The route applies only to the configured 170/Stock → 170/Output flow.",
      "If tickets are missing or quantities differ, inspect source locations, reservations, and completed child moves before retrying."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.0.12",
    "sandboxSourceVersion": "19.0.1.0.12",
    "productionSourceCommit": "c3e578679e3974c507b6f838c7980b0450f1704e",
    "sandboxSourceCommit": "c3e578679e3974c507b6f838c7980b0450f1704e",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.12; sandbox pins 19.0.1.0.12. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "warehouse-shipment",
    "module": "warehouse_shipment",
    "name": "Warehouse Transfers",
    "version": "19.0.1.0.16",
    "category": "Warehouse & Logistics",
    "repo": "warehouse-shipment",
    "guideUrl": "170-to-celestial.html",
    "summary": "Plans interwarehouse loads, source pick tickets and shipping BOLs; also prepares customer 3PL packing lists and filters sales routes in the sandbox-tested .16 update.",
    "setup": [
      "Select the correct company and verify both warehouses belong to it.",
      "Verify the source-to-destination resupply route and warehouse shipping addresses.",
      "For 170 to Celestial, use Celestial - California: Supply Product from 170. The illustrated route is 170/Stock → 170/Output → Inter-warehouse transit → CELCA/Stock.",
      "Outside Warehouse for Shipments designates an external warehouse. Current transfer planning supports any two same-company warehouses with an existing valid resupply route; the outside flag does not create a route or stock.",
      "Managed by a 3PL changes a transfer’s source workflow to BOL email and separate dispatch confirmation, without internal source pick tickets. Normally an external fulfillment provider uses both flags."
    ],
    "use": [
      "Open Inventory → Operations → Warehouse Transfers and select New.",
      "Choose source, destination, route, planned arrival, load reference and product quantities in their stock units.",
      "Complete Shipping / BOL and select Confirm Transfer. Review All Transfers and print the Pick Ticket and Shipping BOL.",
      "Complete the source pick, validate departure into transit, then receive actual arrival quantities through the existing destination receipt.",
      "If using the Celestial Inventory connector, set the inbound receipt reference before transaction processing. Do not receive a quantity twice.",
      "Review backorders and Picked, Shipped, In Transit, Arrived, Stored and Remaining. Follow the complete illustrated 170-to-Celestial guide linked above.",
      "For customer shipments, use 3PL Packing Lists on the confirmed sales order to download a separate PDF for each qualifying warehouse. Either outside/3PL flag can qualify it; documents do not split deliveries, reserve stock, ship goods or email the provider.",
      "In .16, both order-line route selectors allow active sales routes with an active same-company customer-delivery rule from an internal warehouse location or a vendor. Multi-step warehouse deliveries and dropshipping are allowed; internal resupply and receipt-only routes are excluded. Existing selections are not rewritten."
    ],
    "troubleshoot": [
      "Check company, access, installed version and the exact resupply route when a menu or route is missing.",
      "Confirmation and document printing do not validate transfers; actual source dispatch and destination receipt are separate operations.",
      "Use actual quantities and native backorders for partial moves. Do not use stock-comparison adjustments to receive a load already in transit.",
      "Interwarehouse routes belong in Warehouse Transfers. The sales-line route filter does not change stock routes or fix warehouse configuration."
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.0.15",
    "sandboxSourceVersion": "19.0.1.0.16",
    "productionSourceCommit": "5a262a437d9576ed1106c585e00913466a7e3d61",
    "sandboxSourceCommit": "cda5c8e2c51e19d7cb0ef4d9590e1f959a07887b",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.15; sandbox pins 19.0.1.0.16. Source availability does not prove installation: check Odoo Apps for the installed state and version. Production .15 already includes customer 3PL packing lists. The .16 customer-delivery/vendor-dropship route filter is tested in sandbox and prepared for production, but has not been deployed as of this review."
  },
  {
    "slug": "product-on-order-column",
    "module": "product_on_order_column",
    "name": "Product On Order Column",
    "version": "19.0.1.0.0",
    "category": "Products & Inventory",
    "repo": "product-on-order-column",
    "summary": "Shows outstanding confirmed purchase-order quantity on the product list for the active company.",
    "setup": [
      "Open Purchase → Configuration → Settings.",
      "Under Product List, enable Show On Order Column for the current company and save.",
      "Repeat for any other company that should see the column."
    ],
    "use": [
      "Open the product list in the company where the setting is enabled.",
      "Review On Order alongside existing stock quantities.",
      "Open the purchase orders when you need supplier, date, or line-level detail."
    ],
    "troubleshoot": [
      "If the column is absent, confirm the active company and the Product List setting.",
      "On Order reflects confirmed purchase-order quantity remaining to receive; draft orders are excluded."
    ],
    "walkthrough": [
      {
        "title": "Enable the column",
        "image": "assets/screenshots/product-on-order-setting.jpg",
        "caption": "The Purchase settings page shows the company-specific Show On Order Column option.",
        "steps": [
          "Select the intended company.",
          "Open Purchase → Configuration → Settings.",
          "Enable Show On Order Column and save.",
          "Open the product list to verify the column."
        ]
      }
    ],
    "hasScreenshot": true,
    "productionSourceVersion": "19.0.1.0.0",
    "sandboxSourceVersion": "19.0.1.0.0",
    "productionSourceCommit": "081f1f8b86ed7bca78d800b1ff4aa8ee14c54f42",
    "sandboxSourceCommit": "081f1f8b86ed7bca78d800b1ff4aa8ee14c54f42",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.0; sandbox pins 19.0.1.0.0. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "celestial-velocity-inventory",
    "module": "celestial_velocity_inventory",
    "name": "Celestial Inventory",
    "version": "19.0.1.0.10",
    "category": "Commerce & Integration",
    "repo": "celestial-velocity-inventory",
    "summary": "Imports Celestial inventory comparisons and verifies completed receipts and shipments against existing Odoo transfers.",
    "setup": [
      "A Settings administrator opens Celestial Stock → Connection Settings and selects the existing company and warehouse.",
      "Configure the dedicated portal account privately, test the connection, and run Sync Now. Stock refresh and Receipt & Shipment Sync are separate switches; enable either only after review.",
      "Map each exact external item code and unit to an existing product and explicitly enter units per source unit. Pack descriptions do not establish conversions."
    ],
    "use": [
      "Run Sync Now, review Imported Inventory and the latest comparison, and use Map Imported Products for unmapped items. Review suggested matches before saving; sync again after changes.",
      "Sync Now imports a comparison without changing Odoo stock. Review Stock Update prepares physical inventory counts; applying them is a separate stock-changing action.",
      "For transaction verification, use existing confirmed transfers and enter exact Celestial receipt or shipment references. Update Now can validate matching completed transactions and create native backorders.",
      "Open Celestial Stock → Receipts & Shipments to review evidence and exceptions. For an ambiguous match, select the correct existing transfer and use Retry Verification.",
      "Archive older comparisons only after a newer successful comparison exists. Automatic stock refresh never applies inventory adjustments."
    ],
    "troubleshoot": [
      "Do not receive or adjust a load twice: reconcile existing transit transfers before applying comparison counts.",
      "Missing mappings, excess quantities, tracked or packaged stock and additional approvals require review. A stock total alone never creates an order.",
      "A failed or expired connection may pause automatic refresh; an administrator must retest it. Keep account credentials out of screenshots and support reports."
    ],
    "hasScreenshot": false,
    "productionSourceVersion": "19.0.1.0.10",
    "sandboxSourceVersion": "19.0.1.0.10",
    "productionSourceCommit": "1c8c4f9f62e4586f7fd12f7db22a23f78c988e7b",
    "sandboxSourceCommit": "1c8c4f9f62e4586f7fd12f7db22a23f78c988e7b",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.10; sandbox pins 19.0.1.0.10. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "company-watermark",
    "module": "company_watermark",
    "name": "KR2 Company Watermark",
    "version": "19.0.1.0.1",
    "category": "User Interface",
    "repo": "company-watermark",
    "summary": "Displays the active company name on internal Odoo screens.",
    "setup": [
      "A Settings administrator opens Settings → Users & Companies → Companies, then the Company Watermark tab.",
      "Enable the watermark and review color, opacity, font size and position for that company."
    ],
    "use": [
      "Switch to the intended company and confirm its name on the screen.",
      "Refresh other open tabs after changing watermark settings."
    ],
    "troubleshoot": [
      "The watermark identifies the active company; it does not change record access or select sandbox.",
      "The watermark does not appear on customer websites or printed reports."
    ],
    "hasScreenshot": false,
    "productionSourceVersion": "19.0.1.0.1",
    "sandboxSourceVersion": "19.0.1.0.1",
    "productionSourceCommit": "d69af177dfe85cb22333238f09cff2096edde09c",
    "sandboxSourceCommit": "d69af177dfe85cb22333238f09cff2096edde09c",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.1; sandbox pins 19.0.1.0.1. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "customer-blanket-orders-enterprise",
    "module": "customer_blanket_orders_enterprise",
    "name": "Customer Blanket Orders Enterprise Portal",
    "version": "19.0.7.0.1",
    "category": "Sales & Agreements",
    "repo": "odoo19-customer-blanket-orders-Enterprise_Addon",
    "summary": "Adds customer portal access and release requests to Customer Blanket Orders.",
    "setup": [
      "Install the base Customer Blanket Orders module and configure customer agreements first. This extension also depends on Portal and Website.",
      "Review portal-user access and the customer/company ownership of each agreement before sharing access."
    ],
    "use": [
      "A portal customer opens My Blanket Orders to review accessible agreements and remaining quantities.",
      "Use the portal Release Builder to choose agreement products and requested quantities, then submit a release request.",
      "Internal users review the release request and resulting records before confirming operational work."
    ],
    "troubleshoot": [
      "Portal release requests and confirmed sales orders are different stages; check the request and linked order status.",
      "If an agreement is missing, check the customer portal identity, company and agreement state."
    ],
    "hasScreenshot": false,
    "productionSourceVersion": "19.0.7.0.1",
    "sandboxSourceVersion": "19.0.7.0.1",
    "productionSourceCommit": "df8094af8f45bfa6d6b15a767ecb11ff69fd8aed",
    "sandboxSourceCommit": "df8094af8f45bfa6d6b15a767ecb11ff69fd8aed",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.7.0.1; sandbox pins 19.0.7.0.1. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "customer-quantity-forecast",
    "module": "customer_quantity_forecast",
    "name": "Customer Weekly Quantity Forecast",
    "version": "19.0.1.0.6",
    "category": "Sales & Agreements",
    "repo": "customer-quantity-forecast",
    "summary": "Estimates weekly product quantities from customer order history and reviewed manual history; it creates no orders or stock moves.",
    "setup": [
      "Open Customer Quantity Forecasts → Forecasts, select a customer, choose the first Monday and a 1–52 week horizon. The default is 13 weeks.",
      "Optionally select products. Enter missing weekly quantities under Manual Weekly History; omit unknown weeks and enter zero only for known zero-purchase weeks."
    ],
    "use": [
      "Select Generate Forecast, or use Generate Forecast on a company contact to open its standard 13-week plan.",
      "Review the Two-Year Weekly History, Purchased Products / Quarterly Averages and Quarterly Purchase Detail tabs.",
      "Read forecast quantities alongside confidence, Upcoming Confirmed Qty and Additional Expected Qty; compare products in their own units.",
      "Sales Administrators can use Adjust Forecast, Override Qty and Adjustment Note for a documented adjustment. Regenerate after updating history."
    ],
    "troubleshoot": [
      "These are ordered quantities, a proxy for demand, not measured customer consumption or deliveries.",
      "History Complete From makes missing weeks count as zero; use it only when history is complete for every selected product.",
      "Insufficient History with zero is a placeholder requiring review, not a prediction of zero demand."
    ],
    "hasScreenshot": false,
    "productionSourceVersion": "19.0.1.0.6",
    "sandboxSourceVersion": "19.0.1.0.6",
    "productionSourceCommit": "a464ffa1365f2c42383ea6f6ab2e7e03f98e2e97",
    "sandboxSourceCommit": "a464ffa1365f2c42383ea6f6ab2e7e03f98e2e97",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.6; sandbox pins 19.0.1.0.6. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "quickbooks-po-import",
    "module": "quickbooks_po_import",
    "name": "PO Import Wizard",
    "version": "19.0.1.0.1",
    "category": "Commerce & Integration",
    "repo": "po-import-wizard",
    "summary": "Extracts QuickBooks purchase-order PDFs for reviewed creation or attachment of draft purchase or sales orders.",
    "setup": [
      "Open PO Import Wizard → PO Imports and select the correct company.",
      "Prepare the source PDF and existing partner/product records. An administrator can configure the supported email alias separately."
    ],
    "use": [
      "Upload the PDF and select Extract PDF.",
      "Review the PO number, date, partner, quantities, prices and every product match. Resolve unmatched lines.",
      "Choose Purchase Order or Sales Order, then Create New Order or Attach to Existing Order. Verify the exact target when attaching.",
      "Select Create / Attach Order, then Open Order. Review the unconfirmed order and attached source PDF before approval."
    ],
    "troubleshoot": [
      "This is a QuickBooks PO PDF importer, not the Program Builder Excel importer.",
      "Products are not created automatically. Unmatched lines must be resolved before processing.",
      "Check for an existing import and order before retrying so the same document is not added twice."
    ],
    "hasScreenshot": false,
    "productionSourceVersion": "19.0.1.0.1",
    "sandboxSourceVersion": "19.0.1.0.1",
    "productionSourceCommit": "19b348f5cd04f0c02603438b1b9f2f7823b59586",
    "sandboxSourceCommit": "19b348f5cd04f0c02603438b1b9f2f7823b59586",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.1; sandbox pins 19.0.1.0.1. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "sale-order-full-addresses",
    "module": "sale_order_full_addresses",
    "name": "Sales Order Full Addresses",
    "version": "19.0.1.0.0",
    "category": "Programs & Sales",
    "repo": "sale-order-full-addresses",
    "summary": "Shows full invoice and delivery address blocks on quotations and sales orders.",
    "setup": [
      "Use existing customer invoice and delivery contacts with complete addresses.",
      "No separate settings screen is required."
    ],
    "use": [
      "Open a quotation or sales order and select the correct invoice and delivery contacts.",
      "Review the full address displayed beneath each selector before confirming the order.",
      "Correct the underlying contact if an address is incomplete."
    ],
    "troubleshoot": [
      "The displayed blocks are read-only. Edit the contact record to correct the address.",
      "This module changes sales forms; it does not change printed quotation, invoice or packing-list reports."
    ],
    "hasScreenshot": false,
    "productionSourceVersion": "19.0.1.0.0",
    "sandboxSourceVersion": "19.0.1.0.0",
    "productionSourceCommit": "85081a0cdc217ad96972ff4b982bbb4a9bc4874c",
    "sandboxSourceCommit": "55e5f7d4db9302717f4a436a62160ec2870ef3be",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.0; sandbox pins 19.0.1.0.0. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "shipment-proof",
    "module": "shipment_proof",
    "name": "Shipment Proof of Delivery & Pickup",
    "version": "19.0.1.0.2",
    "category": "Warehouse & Logistics",
    "repo": "shipment-proof",
    "summary": "Captures carrier pickup and customer delivery signatures, with tablet synchronization and review separate from stock validation.",
    "setup": [
      "An Inventory manager opens Shipment Proof → Ship Via Rules and configures the proof requirement for each shipping method.",
      "Under Shipment Proof → Tablets, configure the correct company and pair an authorized tablet using its short-lived single-use code. Keep pairing codes and tablet credentials private.",
      "Assign the tablet to the shipment and download its shipment data before going offline."
    ],
    "use": [
      "Open Shipment Proof → Shipments and review the delivery or pickup requirement and assigned device.",
      "On the tablet, download assigned shipments, record the actual outcome and signer, and capture the signature.",
      "Sync the tablet when connected. Review Signed Proofs and resolve Needs Review entries before accepting them.",
      "Use the sales order POD button to view linked proofs, or Print Signed Proof for a reviewed copy."
    ],
    "troubleshoot": [
      "Pickup proof records carrier custody; delivery proof records receipt. Neither substitutes for inventory validation.",
      "Changed shipment details can require manager review of the signed snapshot. Do not accept an exception without checking it.",
      "Download before offline use and sync outstanding proofs before retiring a tablet. Re-pairing replaces the old credential."
    ],
    "hasScreenshot": false,
    "productionSourceVersion": "19.0.1.0.2",
    "sandboxSourceVersion": "19.0.1.0.2",
    "productionSourceCommit": "06924359468813abad8b1bde9306a0f33e76dc4b",
    "sandboxSourceCommit": "06924359468813abad8b1bde9306a0f33e76dc4b",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.2; sandbox pins 19.0.1.0.2. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  },
  {
    "slug": "website-shortcut-manager",
    "module": "website_shortcut_manager",
    "name": "Website Shortcut Manager",
    "version": "19.0.1.0.4",
    "category": "Administration",
    "repo": "website-shortcut-manager",
    "summary": "Adds configurable website shortcuts to the Odoo home screen.",
    "setup": [
      "A Settings administrator opens Website Shortcuts from the home screen. Developer mode is not required.",
      "Create a shortcut with a descriptive name and approved website URL. Review allowed companies, groups, sequence and new-tab behavior."
    ],
    "use": [
      "Choose a built-in icon or an image supplied by an installed module, then save.",
      "Refresh the browser or use Refresh Home-Screen Icon. Open the shortcut from the home screen.",
      "Deactivate a shortcut to hide it without deleting its configuration."
    ],
    "troubleshoot": [
      "A shortcut does not grant access to the destination service. Sign in there with your authorized account.",
      "If it is missing, check Active, company and group visibility, then refresh the launcher."
    ],
    "hasScreenshot": false,
    "productionSourceVersion": "19.0.1.0.4",
    "sandboxSourceVersion": "19.0.1.0.4",
    "productionSourceCommit": "f158ef7161cdf9dabeb2df8ca24e062934c637a4",
    "sandboxSourceCommit": "f158ef7161cdf9dabeb2df8ca24e062934c637a4",
    "availability": "Source review: 22 October 2026. Production main pins 19.0.1.0.4; sandbox pins 19.0.1.0.4. Source availability does not prove installation: check Odoo Apps for the installed state and version."
  }
];

// The same receipt-level status appears beside every item on that receipt.
const RECEIPT_VALIDATION_GUIDE = [
  {pricing:'Awaiting Price Confirmation',validation:'Required',next:'Select Open to Validate. An Inventory or Purchase Administrator opens Confirm Receipt Pricing, reviews each unit cost and confirms pricing. Then review quantities and validate the receipt.'},
  {pricing:'Pricing Confirmed',validation:'Required',next:'Pricing has been approved, but receiving is not complete. Select Open to Validate, review the receipt and choose Validate. Complete any backorder or other validation wizard that appears.'},
  {pricing:'Not Required',validation:'Required',next:'The warehouse does not require price confirmation for this receipt. Select Open to Validate, review quantities and validate through the normal receipt controls.'},
  {pricing:'Any displayed value',validation:'Complete',next:'The incoming receipt is already validated. No further receipt validation is needed. Complete any separate Storage or put-away transfer when applicable.'}
];
for (const slug of ['daily-received-items','weekly-received-items']) {
  const item=MODULES.find((entry)=>entry.slug===slug);
  item.statusGuide=RECEIPT_VALIDATION_GUIDE;
  item.statusNotes=[
    'Pricing and Final Validation describe the whole receipt. Products from the same receipt repeat those statuses; open the receipt once and validate it once.',
    'Recording physical arrival and printing barcode labels do not approve costs or complete receipt validation. Stock remains unreceived until the receipt is validated.',
    'If products or quantities change before final validation, pricing must be confirmed again. Refresh the report to see the current status.',
    'Open to Validate opens the normal receipt form and honors your permissions. If Confirm Receipt Pricing is unavailable, ask an Inventory or Purchase Administrator to review it.',
    'Use Requires Final Validation to find pending receipts, then read Pricing to distinguish receipts awaiting approval from those ready for final validation.'
  ];
}

MODULES.find((item) => item.slug === 'customer-blanket-orders').walkthrough.unshift({title:'Enable the company setting',image:'assets/screenshots/customer-blanket-orders-setting.jpg',caption:'The company settings show Enable Blanket Orders and optional defaults.',steps:['Switch to the intended company.','Open Settings and find Customer Blanket Orders.','Enable Blanket Orders and save.','Review optional defaults before creating an agreement.']});
MODULES.find((item) => item.slug === 'free-product-program-portal').walkthrough = [{title:'Create a selection program',image:'assets/screenshots/free-product-program-portal.jpg',caption:'A new Selection Program form provides the starting point for dates, stores, and products.',steps:['Open the Selection Programs list and select New.','Enter the program details and dates.','Add stores, SAP values, products, categories, and allowances.','Review the portal experience before sharing its URL.']}];
MODULES.find((item) => item.slug === 'gratis-box-builder').walkthrough = [{title:'Create a gratis program',image:'assets/screenshots/gratis-box-builder.jpg',caption:'A new Gratis Program form is ready for store and allocation planning.',steps:['Open Gratis Programs and select New.','Enter program and store information.','Add items and allocations, then review the generated matrix.']}];

const ACTIVE_MODULES = MODULES;

function esc(value='') {
  return String(value).replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
}

function repositoryUrl(item) { return `https://github.com/RobertMiller-KR2/${item.repo}`; }

function renderCards(items) {
  const target = document.querySelector('[data-module-grid]');
  if (!target) return;
  target.innerHTML = items.map((item) => `
    <a class="module-card" href="manual.html?module=${encodeURIComponent(item.slug)}">
      <span class="card-kicker">${esc(item.category)}</span>
      <h2>${esc(item.name)}</h2>
      <p>${esc(item.summary)}</p>
      <span class="module-meta"><code>${esc(item.version)}</code><span>Open manual →</span></span>
    </a>`).join('');
  const count = document.querySelector('[data-result-count]');
  if (count) count.textContent = `${items.length} manual${items.length === 1 ? '' : 's'}`;
}

function renderLibrary() {
  const search = document.querySelector('[data-module-search]');
  const category = document.querySelector('[data-category-filter]');
  const categories = [...new Set(ACTIVE_MODULES.map((item) => item.category))].sort();
  category.innerHTML = '<option value="">All categories</option>' + categories.map((c) => `<option>${esc(c)}</option>`).join('');
  const update = () => {
    const q = search.value.trim().toLowerCase();
    renderCards(ACTIVE_MODULES.filter((item) => (!category.value || item.category === category.value) && (!q || `${item.name} ${item.module} ${item.summary}`.toLowerCase().includes(q))));
  };
  search.addEventListener('input', update);
  category.addEventListener('change', update);
  renderCards(ACTIVE_MODULES);
}

function list(items) { return `<ol class="steps">${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ol>`; }

function renderManual(slug) {
  const item = ACTIVE_MODULES.find((entry) => entry.slug === slug) || ACTIVE_MODULES[0];
  document.title = `${item.name} · User Manual`;
  const target = document.querySelector('[data-manual]');
  target.innerHTML = `
    <nav class="breadcrumbs"><a href="index.html">Documentation</a><span>/</span><a href="modules.html">Module manuals</a><span>/</span><span>${esc(item.name)}</span></nav>
    <header class="guide-head compact-head">
      <p class="eyebrow">User manual · ${esc(item.category)}</p>
      <h1>${esc(item.name)}</h1>
      <p class="lede">${esc(item.summary)}</p>
      <div class="guide-meta"><span class="meta-pill">Odoo 19</span><span class="meta-pill">Version ${esc(item.version)}</span><span class="meta-pill">Module ${esc(item.module)}</span></div>
      <div class="action-bar"><button class="print-button" onclick="window.print()">Print manual</button>${item.guideUrl ? `<a class="button button-primary" href="${esc(item.guideUrl)}">170 to Celestial: full illustrated guide</a>` : ''}<a class="button button-outline" href="operations-reference.html">Routes, warehouse settings and recovery</a><a class="button button-outline" href="${repositoryUrl(item)}/commits" target="_blank" rel="noreferrer">View change history</a></div>
    </header>
    ${item.availability ? `<div class="callout"><strong>Availability:</strong> ${esc(item.availability)}</div>` : ''}
    <div class="guide-layout">
      <aside class="toc"><strong>On this page</strong><a href="#purpose">Purpose</a><a href="#screenshots">Screenshots</a><a href="#setup">Setup</a><a href="#use">How to use it</a>${item.statusGuide ? '<a href="#validation-status">Pricing and validation</a>' : ''}<a href="#troubleshoot">Troubleshooting</a><a href="#changes">Changes</a></aside>
      <article class="guide-content">
        <section id="purpose" class="guide-section"><p class="eyebrow">Overview</p><h2>Purpose and users</h2><p>${esc(item.summary)}</p><p>Use this module only in the company and environment appropriate to the record. Validate configuration and workflow changes in the sandbox before using them in production.</p></section>
        <section id="screenshots" class="guide-section"><p class="eyebrow">Screen reference</p><h2>Find the module in Apps</h2>${item.hasScreenshot ? `<figure class="figure"><img src="assets/screenshots/${esc(item.slug)}-card.jpg" alt="Odoo Apps card for ${esc(item.name)}" loading="lazy"><figcaption>Odoo Apps reference captured 14 October 2026. Versions, installation buttons and layout may differ today; follow the reviewed text and check Apps.</figcaption></figure>` : '<p>This guide was checked against the pinned module manifest and configuration views on 22 October 2026. No current sanitized screenshot is available.</p>'}${item.walkthrough ? '<p>Additional workflow screenshots appear with the steps below.</p>' : ''}</section>
        <section id="setup" class="guide-section"><p class="eyebrow">Administrator setup</p><h2>Configure the module</h2>${list(item.setup)}</section>
        <section id="use" class="guide-section"><p class="eyebrow">Daily workflow</p><h2>How to use it</h2>${list(item.use)}${item.walkthrough ? `<div class="illustrated-walkthrough">${item.walkthrough.map((part,index)=>`<div class="walkthrough-part"><p class="step-label">Process ${index+1}</p><h3>${esc(part.title)}</h3>${list(part.steps)}<figure class="figure"><img src="${esc(part.image)}" alt="${esc(part.caption)}"><figcaption>${esc(part.caption)}</figcaption></figure></div>`).join('')}</div>` : ''}</section>
        ${item.statusGuide ? `<section id="validation-status" class="guide-section"><p class="eyebrow">Receipt follow-up</p><h2>Read Pricing and Final Validation</h2><p>Use both columns together to decide the next step. Price confirmation and final stock validation are separate steps.</p><div class="table-scroll"><table class="comparison-table"><thead><tr><th>Pricing</th><th>Final Validation</th><th>What to do</th></tr></thead><tbody>${item.statusGuide.map((row)=>`<tr><td>${esc(row.pricing)}</td><td>${esc(row.validation)}</td><td>${esc(row.next)}</td></tr>`).join('')}</tbody></table></div><ul>${item.statusNotes.map((note)=>`<li>${esc(note)}</li>`).join('')}</ul></section>` : ''}
        <section id="troubleshoot" class="guide-section"><p class="eyebrow">Support</p><h2>Troubleshooting</h2><ul>${item.troubleshoot.map((x) => `<li>${esc(x)}</li>`).join('')}</ul><div class="callout warning"><strong>Before escalating:</strong> record the company, user, document number, exact error, and the steps that produced it. Do not include customer-sensitive data in public issue reports.</div></section>
        <section id="changes" class="guide-section"><p class="eyebrow">Change tracking</p><h2>Version and repository history</h2><div class="version-panel"><div><span>Documented source version</span><strong>${esc(item.version)}</strong></div><div><span>Module identifier</span><strong>${esc(item.module)}</strong></div></div><p>This register records the source version documented for this guide. Check Odoo Apps for the current installed version and status. The repository commit history is the technical change record.</p><a href="${repositoryUrl(item)}/commits" target="_blank" rel="noreferrer">Open repository history</a><p class="privacy-note">Repository access may require an authorized GitHub account.</p></section>
      </article>
    </div>`;
}

function renderChanges() {
  const body = document.querySelector('[data-change-table]');
  body.innerHTML = ACTIVE_MODULES.slice().sort((a,b)=>a.name.localeCompare(b.name)).map((item) => `<tr><td><a href="manual.html?module=${encodeURIComponent(item.slug)}">${esc(item.name)}</a><small>${esc(item.module)}</small></td><td><code>${esc(item.version)}</code></td><td><code>${esc(item.productionSourceVersion)}</code></td><td><code>${esc(item.sandboxSourceVersion)}</code></td><td>${esc(item.category)}</td><td><a href="${repositoryUrl(item)}/commits" target="_blank" rel="noreferrer">History</a></td></tr>`).join('');
}

// Quick starts are task guides. Use actual workflow screenshots when available;
// provide text-only cards for new tasks without a current sanitized screenshot.
const QUICK_START_TASKS = [
  {"slug": "odoo-qz-sato-label", "id": "silk-label-printing", "title": "Enable label printing on an Amazon Silk tablet", "steps": ["Connect the tablet to a network that can reach the QZ print server.", "In Silk, open permissions for the Odoo website and set Local network access to Allow. If a connection prompt appears, select Allow.", "Refresh Odoo, open Print SATO Labels and select Reconnect when available.", "Confirm the QZ server name and printer list, then select the intended printer.", "Repeat on each tablet. Sandbox and production are separate websites and need separate permissions.", "If it still fails, have the administrator check connection-certificate trust and Odoo signing configuration. Do not copy the private key to the tablet."]},
  {"slug": "odoo-qz-sato-label", "id": "arrival-label-printing", "title": "Print labels when goods physically arrive", "steps": ["In Odoo Barcode → Operations → Receipts, open the receipt and scan the actual quantities.", "For a price-controlled warehouse, select Validate, then Record Physical Arrival in Receipt Acknowledgment.", "Enter the number of labels for each item; use 0 to skip a product.", "Choose a QZ server printer and select Print Labels, or choose Skip Printing.", "Pricing approval and final receipt validation still follow. Arrival labels do not make stock available.", "Use QZ SATO Labels 19.0.1.0.8 or newer. The automatic label offer is not repeated at final validation."]},

  {slug:'customer-balance-statements',title:'Review a customer balance statement',image:'assets/screenshots/customer-balance-statements-wizard.jpg',caption:'Choose the company, date, and customers, then prepare statements for review.',steps:['Open Accounting → Customers → Prepare Balance Statements.','Choose the company, balance date, and customers.','Select Prepare and Review, then inspect the statement PDF.','Download the reviewed PDF if you need a copy.']},
  {slug:'sales-tax-liability-state',title:'Review sales tax by state',image:'assets/screenshots/sales-tax-liability-wizard.jpg',caption:'The report dialog provides company, period, state source, preview, and export controls.',steps:['Open Accounting → Reporting → Taxes & Fiscal → Sales Tax Liability by State.','Choose the company and reporting dates.','Select Preview and review the state totals.','Print the PDF or export CSV when you need a copy.']},
  {slug:'product-on-order-column',title:'Check what is on order',image:'assets/screenshots/product-on-order-list.jpg',caption:'The product list shows the On Order quantity beside current stock.',steps:['Open Inventory → Products → Products in the company you are working in.','Find the product and read its On Order quantity.','Open the related purchase order when you need supplier or delivery detail.']},
  {slug:'gratis-box-builder',title:'Build a gratis box matrix',image:'assets/screenshots/gratis-box-builder.jpg',caption:'The Gratis Program form has the store file, allocation, product, and Build Matrix controls.',steps:['Open a Gratis Program or select New.','Add the store file, products, and allocation details for this program.','Select Build Matrix and review the calculated quantities.','Open the linked quotation to check the resulting lines.']},
  {slug:'program-builder',title:'Create a program and quote',image:'assets/program-builder-new-program.jpg',caption:'A new Program shows its details, schedule, and Create Quote action.',steps:['Open Program Builder → Programs and select New.','Enter the program name, customer, dates, and customer PO.','Complete the schedule and quote details.','Select Create Quote and review the linked quotation.']},
  {"slug": "daily-received-items", "title": "Review daily arrivals and finish validation", "steps": ["Open Inventory → Daily Received Items in the correct company.", "Use Requires Final Validation to find arrivals still pending.", "Review Pricing, then select Open to Validate on the receipt row.", "Have an authorized reviewer confirm pricing when required, then validate the receipt.", "Refresh the report and confirm Final Validation shows Complete."]},
  {"slug": "weekly-received-items", "title": "Review weekly arrivals and finish validation", "steps": ["Open Inventory → Weekly Received Items in the correct company.", "Use Requires Final Validation to find arrivals still pending.", "Review Pricing, then select Open to Validate on the receipt row.", "Have an authorized reviewer confirm pricing when required, then validate the receipt.", "Refresh the report and confirm Final Validation shows Complete."]},
  {slug:'customer-blanket-orders',title:'Release part of a blanket order',image:'assets/blanket-orders-create-release.jpg',caption:'The customer release dialog accepts a delivery date and quantity to release.',steps:['Open the active Customer Blanket Order.','Select Release Partial Shipment.','Enter the requested delivery date and quantity, then select Create Release.','Open the linked sales order and review the release.']},
  {slug:'warehouse-operations-dashboard-pro',title:'Check warehouse work by stage',image:'assets/screenshots/warehouse-dashboard.jpg',caption:'The dashboard groups Pick Ready, Pack Ready, and Deliveries Ready counts by warehouse.',steps:['Open the Warehouse Operations Dashboard.','Find your warehouse and select Pick Ready, Pack Ready, or Deliveries Ready.','Review the operation cards in that stage.','Complete the underlying transfer in Inventory or Barcode.']},
  {slug:'warehouse-shipment',title:'Transfer stock from 170 to Celestial',guideUrl:'170-to-celestial.html',image:'assets/screenshots/170-celestial/03-confirmed-route.png',caption:'The sandbox transfer creates a 170 pick, dispatch into transit and separate Celestial receipt.',steps:['Open Inventory → Operations → Warehouse Transfers → New.','Choose 170, Celestial – California and the existing resupply route; add total stock-unit quantities.','Complete shipping details, Confirm Transfer and print the pick ticket and BOL.','Validate the actual pick and departure, receive actual arrival quantities, then review progress and backorders.'] }
];

function renderQuickStart() {
  const target = document.querySelector('[data-quick-start]');
  if (!target) return;
  const tasks = QUICK_START_TASKS.map((task) => ({...task,module:ACTIVE_MODULES.find((item) => item.slug === task.slug)}));
  const categories = [...new Set(tasks.map((task) => task.module.category))].sort();
  target.innerHTML = categories.map((category) => {
    const group = tasks.filter((task) => task.module.category === category).sort((a,b)=>a.title.localeCompare(b.title));
    return `<section class="quick-category"><div class="quick-category-head"><p class="eyebrow">${esc(category)}</p><h2>${esc(category)}</h2></div><div class="quick-grid">${group.map((task) => `<article${task.id ? ` id="${esc(task.id)}"` : ''} class="quick-card${task.image ? '' : ' quick-card-text'}"><div class="quick-card-copy"><p class="eyebrow">${esc(task.module.name)}</p><h3>${esc(task.title)}</h3><ol class="quick-steps">${task.steps.map((step) => `<li>${esc(step)}</li>`).join('')}</ol><a href="${task.guideUrl ? esc(task.guideUrl) : `manual.html?module=${encodeURIComponent(task.slug)}`}">Open full guide →</a></div>${task.image ? `<figure class="quick-shot"><a href="${esc(task.image)}" target="_blank" rel="noreferrer" aria-label="Enlarge screenshot: ${esc(task.caption)}"><img src="${esc(task.image)}" alt="${esc(task.caption)}" loading="lazy"></a><figcaption>${esc(task.caption)} Select the image to enlarge.</figcaption></figure>` : ''}</article>`).join('')}</div></section>`;
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('[data-module-grid]')) renderLibrary();
  if (document.querySelector('[data-manual]')) renderManual(new URLSearchParams(location.search).get('module'));
  if (document.querySelector('[data-change-table]')) renderChanges();
  if (document.querySelector('[data-quick-start]')) renderQuickStart();
});
