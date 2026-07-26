# `lab_form_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| form_name | varchar(250) | NO | PRI |  |  |  |
| owner | varchar(25) | YES | MUL | NULL |  |  |
| anonymous | char(1) | YES |  | NULL |  |  |
| bethesda_cytologic | char(1) | YES |  | NULL |  |  |
| confirm_charge_money | char(1) | YES |  | NULL |  |  |
| finance_lab_confirm | char(1) | YES |  | NULL |  |  |
| lab_room_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| out_lab | char(1) | YES |  | NULL |  |  |
| allow_online_report | char(1) | YES |  | NULL |  |  |
| report_online_only | char(1) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| design_dfm | longtext | YES |  | NULL |  |  |
| design_pas | longtext | YES |  | NULL |  |  |
| use_design | char(1) | YES |  | NULL |  |  |
| enable_script | char(1) | YES |  | NULL |  |  |
| lab_form_group_type_id | int(11) | YES |  | NULL |  |  |
| view_result_text | char(1) | YES |  | NULL |  |  |
| allow_manual_item | char(1) | YES |  | NULL |  |  |
| immediate_report | char(1) | YES |  | NULL |  |  |
| form_id | int(11) | YES | MUL | NULL |  |  |
| use_display_order | char(1) | YES |  | NULL |  |  |
| has_external_form | char(1) | YES |  | NULL |  |  |
| lab_online_link | char(1) | YES |  | NULL |  |  |
| lab_online_form_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_form_id | form_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_owner | owner | no | 1 |
| PRIMARY | form_name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "form_name": "CHEMISTRY",
    "owner": "PUBLIC",
    "anonymous": "N",
    "bethesda_cytologic": null,
    "confirm_charge_money": "N",
    "finance_lab_confirm": "N",
    "lab_room_id": null,
    "hos_guid": null,
    "out_lab": "N",
    "allow_online_report": "N",
    "report_online_only": null,
    "active_status": "Y",
    "design_dfm": null,
    "design_pas": null,
    "use_design": null,
    "enable_script": null,
    "lab_form_group_type_id": null,
    "view_result_text": null,
    "allow_manual_item": null,
    "immediate_report": null,
    "form_id": 1,
    "use_display_order": null,
    "has_external_form": null,
    "lab_online_link": null,
    "lab_online_form_name": null
  },
  {
    "form_name": "DRUG MORNITORING",
    "owner": "PUBLIC",
    "anonymous": "N",
    "bethesda_cytologic": null,
    "confirm_charge_money": "N",
    "finance_lab_confirm": "N",
    "lab_room_id": null,
    "hos_guid": null,
    "out_lab": "N",
    "allow_online_report": "N",
    "report_online_only": null,
    "active_status": "Y",
    "design_dfm": null,
    "design_pas": null,
    "use_design": null,
    "enable_script": null,
    "lab_form_group_type_id": null,
    "view_result_text": null,
    "allow_manual_item": null,
    "immediate_report": null,
    "form_id": 2,
    "use_display_order": null,
    "has_external_form": null,
    "lab_online_link": null,
    "lab_online_form_name": null
  },
  {
    "form_name": "HEMATOLOGY",
    "owner": "PUBLIC",
    "anonymous": "N",
    "bethesda_cytologic": null,
    "confirm_charge_money": "N",
    "finance_lab_confirm": "N",
    "lab_room_id": null,
    "hos_guid": null,
    "out_lab": "N",
    "allow_online_report": "N",
    "report_online_only": null,
    "active_status": "Y",
    "design_dfm": null,
    "design_pas": null,
    "use_design": null,
    "enable_script": null,
    "lab_form_group_type_id": null,
    "view_result_text": null,
    "allow_manual_item": null,
    "immediate_report": null,
    "form_id": 3,
    "use_display_order": null,
    "has_external_form": null,
    "lab_online_link": null,
    "lab_online_form_name": null
  },
  {
    "form_name": "IMMUNOLOGY",
    "owner": "PUBLIC",
    "anonymous": "N",
    "bethesda_cytologic": null,
    "confirm_charge_money": "Y",
    "finance_lab_confirm": "N",
    "lab_room_id": null,
    "hos_guid": null,
    "out_lab": "N",
    "allow_online_report": "N",
    "report_online_only": null,
    "active_status": "Y",
    "design_dfm": null,
    "design_pas": null,
    "use_design": null,
    "enable_script": null,
    "lab_form_group_type_id": null,
    "view_result_text": null,
    "allow_manual_item": null,
    "immediate_report": null,
    "form_id": 4,
    "use_display_order": null,
    "has_external_form": null,
    "lab_online_link": null,
    "lab_online_form_name": null
  },
  {
    "form_name": "MICROSCOPY",
    "owner": "PUBLIC",
    "anonymous": "N",
    "bethesda_cytologic": null,
    "confirm_charge_money": "Y",
    "finance_lab_confirm": "N",
    "lab_room_id": null,
    "hos_guid": null,
    "out_lab": "N",
    "allow_online_report": "N",
    "report_online_only": null,
    "active_status": "Y",
    "design_dfm": null,
    "design_pas": null,
    "use_design": null,
    "enable_script": null,
    "lab_form_group_type_id": null,
    "view_result_text": null,
    "allow_manual_item": null,
    "immediate_report": null,
    "form_id": 5,
    "use_display_order": null,
    "has_external_form": null,
    "lab_online_link": null,
    "lab_online_form_name": null
  },
  {
    "form_name": "OUT LAB",
    "owner": "PUBLIC",
    "anonymous": "N",
    "bethesda_cytologic": null,
    "confirm_charge_money": "N",
    "finance_lab_confirm": "N",
    "lab_room_id": null,
    "hos_guid": null,
    "out_lab": "Y",
    "allow_online_report": "N",
    "report_online_only": null,
    "active_status": "Y",
    "design_dfm": null,
    "design_pas": null,
    "use_design": null,
    "enable_script": null,
    "lab_form_group_type_id": null,
    "view_result_text": null,
    "allow_manual_item": null,
    "immediate_report": null,
    "form_id": 6,
    "use_display_order": null,
    "has_external_form": null,
    "lab_online_link": null,
    "lab_online_form_name": null
  },
  {
    "form_name": "สารเสพติดในปัสสาวะ",
    "owner": "PUBLIC",
    "anonymous": "N",
    "bethesda_cytologic": null,
    "confirm_charge_money": "N",
    "finance_lab_confirm": "N",
    "lab_room_id": null,
    "hos_guid": null,
    "out_lab": "N",
    "allow_online_report": "N",
    "report_online_only": null,
    "active_status": "N",
    "design_dfm": null,
    "design_pas": null,
    "use_design": null,
    "enable_script": null,
    "lab_form_group_type_id": null,
    "view_result_text": null,
    "allow_manual_item": null,
    "immediate_report": null,
    "form_id": 7,
    "use_display_order": null,
    "has_external_form": null,
    "lab_online_link": null,
    "lab_online_form_name": null
  }
]
```
