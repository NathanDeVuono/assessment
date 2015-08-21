module.service('dataSrv', function() {
  this.widgets = {
    "Widgets": [{
      "id": "1",
      "name": "staff list",
      "description": "used for displaying a staff table",
      "htmlKey": "staff_list",
      "component": "staff",
      "module": "staff",
      "isActive": "1",
      "Widgets_id": "1"
    }, {
      "id": "2",
      "name": "claims list",
      "description": "used for displaying all claims in a table",
      "htmlKey": "claims_list",
      "component": "claims",
      "module": "claims",
      "isActive": "1",
      "Widgets_id": "2"
    }, {
      "id": "3",
      "name": "tickets_open_count",
      "description": "gets the count of open tickets",
      "htmlKey": "tickets_open_count",
      "component": "tickets",
      "module": "tickets",
      "isActive": "1",
      "Widgets_id": "3"
    }, {
      "id": "4",
      "name": "claims_new_count",
      "description": "gets the count of new claims",
      "htmlKey": "claims_list_new",
      "component": "claims",
      "module": "claims",
      "isActive": "1",
      "Widgets_id": "4"
    }, {
      "id": "5",
      "name": "claims_open_count",
      "description": "gets the count of open claims for a PM",
      "htmlKey": "claims_list_open",
      "component": "claims",
      "module": "claims",
      "isActive": "1",
      "Widgets_id": "5"
    }, {
      "id": "7",
      "name": "staff_edit_contact",
      "description": "used for editing staff contact info",
      "htmlKey": "staff_edit_contact",
      "component": "staff",
      "module": "staff",
      "isActive": "1",
      "Widgets_id": "7"
    }, {
      "id": "8",
      "name": "staff_edit_employment",
      "description": "used for editing staff employment info",
      "htmlKey": "staff_edit_employment",
      "component": "staff",
      "module": "staff",
      "isActive": "1",
      "Widgets_id": "8"
    }, {
      "id": "9",
      "name": "staff_general_info",
      "description": "used for displaying basic info at a glance",
      "htmlKey": "staff_general_info",
      "component": "staff",
      "module": "staff",
      "isActive": "1",
      "Widgets_id": "9"
    }, {
      "id": "10",
      "name": "staff_credentials",
      "description": "used for editing login information",
      "htmlKey": "staff_credentials",
      "component": "staff",
      "module": "staff",
      "isActive": "1",
      "Widgets_id": "10"
    }, {
      "id": "11",
      "name": "staff_emergency_contact_info",
      "description": "used for displaying emergency contacts list",
      "htmlKey": "staff_emergency_contact_info",
      "component": "staff",
      "module": "staff",
      "isActive": "1",
      "Widgets_id": "11"
    }, {
      "id": "12",
      "name": "staff_roles",
      "description": "used for selecting system access levels for staff",
      "htmlKey": "staff_roles",
      "component": "staff",
      "module": "staff",
      "isActive": "1",
      "Widgets_id": "12"
    }, {
      "id": "13",
      "name": "staff_login",
      "description": "used for displaying a login form",
      "htmlKey": "staff_login",
      "component": "staff",
      "module": "staff",
      "isActive": "1",
      "Widgets_id": "13"
    }, {
      "id": "15",
      "name": "staff_module_placeholder",
      "description": "used for staff pages needing angular but not using a widget",
      "htmlKey": "staff_module_placeholder",
      "component": "staff",
      "module": "staff",
      "isActive": "1",
      "Widgets_id": "15"
    }, {
      "id": "16",
      "name": "claim header",
      "description": "used for displaying claim header info",
      "htmlKey": "claims_view_header",
      "component": "claims",
      "module": "claims",
      "isActive": "1",
      "Widgets_id": "16"
    }, {
      "id": "17",
      "name": "claim location special instructions",
      "description": "used for displaying special instructions to a unit",
      "htmlKey": "claims_locations_instructions",
      "component": "claims",
      "module": "claims",
      "isActive": "1",
      "Widgets_id": "17"
    }, {
      "id": "18",
      "name": "claim ECD accurracy",
      "description": "used for displaying % accuracy of ECD target dates",
      "htmlKey": "claims_ecd_accuracy",
      "component": "claims",
      "module": "claims",
      "isActive": "1",
      "Widgets_id": "18"
    }, {
      "id": "19",
      "name": "current key holder",
      "description": "used for displaying who currently holds the keys",
      "htmlKey": "keys_current_holder",
      "component": "keys",
      "module": "keys",
      "isActive": "1",
      "Widgets_id": "19"
    }, {
      "id": "20",
      "name": "claim icon list",
      "description": "used for displaying hazard icons within a claim",
      "htmlKey": "claims_icon_list",
      "component": "claims",
      "module": "claims",
      "isActive": "1",
      "Widgets_id": "20"
    }, {
      "id": "21",
      "name": "inventory equipment on site",
      "description": "used for displaying equipment count on site",
      "htmlKey": "inventory_equipment_on_site",
      "component": "inventory",
      "module": "inventory",
      "isActive": "1",
      "Widgets_id": "21"
    }, {
      "id": "22",
      "name": "claim client contact info",
      "description": "used for displaying client\/customer list for a claim",
      "htmlKey": "contacts_claim_client_info",
      "component": "contacts",
      "module": "contacts",
      "isActive": "1",
      "Widgets_id": "22"
    }, {
      "id": "23",
      "name": "claims location areas",
      "description": "used for displaying a chart of unit affected areas",
      "htmlKey": "claims_location_areas",
      "component": "claims",
      "module": "claims",
      "isActive": "1",
      "Widgets_id": "23"
    }, {
      "id": "24",
      "name": "claims location comments",
      "description": "used for displaying comments\/history on a claim location",
      "htmlKey": "claims_location_comments",
      "component": "claims",
      "module": "claims",
      "isActive": "1",
      "Widgets_id": "24"
    }, {
      "id": "25",
      "name": "staff image upload",
      "description": "used for displaying file upload dropzone",
      "htmlKey": "staff_image_upload",
      "component": "staff",
      "module": "staff",
      "isActive": "1",
      "Widgets_id": "25"
    }, {
      "id": "26",
      "name": "claim photo count",
      "description": "displays number of photos uploaded for a claim",
      "htmlKey": "claim_photo_count",
      "component": "claims",
      "module": "claims",
      "isActive": "1",
      "Widgets_id": "26"
    }, {
      "id": "27",
      "name": "claim photos list",
      "description": "displays photos for a claim",
      "htmlKey": "claim_photo_list",
      "component": "claims",
      "module": "claims",
      "isActive": "1",
      "Widgets_id": "27"
    }, {
      "id": "28",
      "name": "claim photos upload",
      "description": "displays images upload form for a claim",
      "htmlKey": "claim_photos_upload",
      "component": "claims",
      "module": "claims",
      "isActive": "1",
      "Widgets_id": "28"
    }, {
      "id": "29",
      "name": "message list",
      "description": "displays all messages for a logged in user",
      "htmlKey": "messaging_list_all",
      "component": "messaging",
      "module": "messaging",
      "isActive": "1",
      "Widgets_id": "29"
    }, {
      "id": "30",
      "name": "message folder list",
      "description": "displays all message folders for a logged in user",
      "htmlKey": "messaging_folders",
      "component": "messaging",
      "module": "messaging",
      "isActive": "1",
      "Widgets_id": "30"
    }, {
      "id": "31",
      "name": "message view selected",
      "description": "displays a selected message",
      "htmlKey": "messaging_view_selected",
      "component": "messaging",
      "module": "messaging",
      "isActive": "1",
      "Widgets_id": "31"
    }, {
      "id": "32",
      "name": "message compose",
      "description": "displays an input form for composing messages",
      "htmlKey": "messaging_compose",
      "component": "messaging",
      "module": "messaging",
      "isActive": "1",
      "Widgets_id": "32"
    }, {
      "id": "33",
      "name": "widget list",
      "description": "displays all widgets within the system",
      "htmlKey": "widgets_list",
      "component": "widgets",
      "module": "widgets",
      "isActive": "1",
      "Widgets_id": "33"
    }, {
      "id": "36",
      "name": "staff_lost_login",
      "description": "displays input form for lost login",
      "htmlKey": "staff_lost_login",
      "component": "staff",
      "module": "staff",
      "isActive": "1",
      "Widgets_id": "36"
    }, {
      "id": "37",
      "name": "q",
      "description": "q",
      "htmlKey": "q",
      "component": "q",
      "module": "q",
      "isActive": "1",
      "Widgets_id": "37"
    }, {
      "id": "38",
      "name": "q",
      "description": "q",
      "htmlKey": "q",
      "component": "q",
      "module": "q",
      "isActive": "1",
      "Widgets_id": "38"
    }, {
      "id": "39",
      "name": "q",
      "description": "q",
      "htmlKey": "q",
      "component": "q",
      "module": "q",
      "isActive": "1",
      "Widgets_id": "39"
    }, {
      "id": "40",
      "name": "q",
      "description": "q",
      "htmlKey": "q",
      "component": "q",
      "module": "q",
      "isActive": "1",
      "Widgets_id": "40"
    }, {
      "id": "41",
      "name": "q",
      "description": "q",
      "htmlKey": "q",
      "component": "q",
      "module": "q",
      "isActive": "0",
      "Widgets_id": "41"
    }, {
      "id": "42",
      "name": "a",
      "description": "a",
      "htmlKey": "a",
      "component": "a",
      "module": "a",
      "isActive": "0",
      "Widgets_id": "42"
    }, {
      "id": "43",
      "name": "asdf",
      "description": "asdfasdfasdf",
      "htmlKey": "asdf",
      "component": "asdf",
      "module": "asdf",
      "isActive": "0",
      "Widgets_id": "43"
    }, {
      "id": "44",
      "name": "qwer",
      "description": "bvasdfghabrasdf",
      "htmlKey": "qwer",
      "component": "qwer",
      "module": "asdlfasdfjkasdf",
      "isActive": "0",
      "Widgets_id": "44"
    }, {
      "id": "45",
      "name": "vdsxad",
      "description": "vasdvasda",
      "htmlKey": "vdsxad",
      "component": "brvawe",
      "module": "afdsgbv",
      "isActive": "0",
      "Widgets_id": "45"
    }, {
      "id": "46",
      "name": "qwe",
      "description": "qwe",
      "htmlKey": "qwe",
      "component": "qwe",
      "module": "qwe",
      "isActive": "0",
      "Widgets_id": "46"
    }],
    "WidgetsCount": [{
      "rowCount": "42"
    }]
  };
});
