# `lab_form`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| form_name | varchar(250) | NO | PRI |  |  |  |
| lab_items_code | int(11) | YES | MUL | NULL |  |  |
| form_position_left | int(11) | YES |  | NULL |  |  |
| form_position_top | int(11) | YES |  | NULL |  |  |
| tab_order | tinyint(4) | YES |  | NULL |  |  |
| form_position_width | int(11) | YES |  | NULL |  |  |
| component_name | varchar(200) | NO | PRI |  |  |  |
| parent_name | varchar(200) | YES |  | NULL |  |  |
| component_type | varchar(25) | YES |  | NULL |  |  |
| component_caption | varchar(250) | YES |  | NULL |  |  |
| checked | char(1) | YES |  | NULL |  |  |
| form_position_height | int(11) | YES |  | NULL |  |  |
| font_name | varchar(50) | YES |  | NULL |  |  |
| font_size | int(11) | YES |  | NULL |  |  |
| font_color | int(11) | YES |  | NULL |  |  |
| specimen_code | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| form_name | form_name | no | 1 |
| form_name_lab_items_code | form_name | no | 1 |
| form_name_lab_items_code | lab_items_code | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| lab_items_code | lab_items_code | no | 1 |
| PRIMARY | form_name | yes | 1 |
| PRIMARY | component_name | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "form_name": "CHEMISTRY",
    "lab_items_code": 256,
    "form_position_left": 85,
    "form_position_top": 93,
    "tab_order": null,
    "form_position_width": 218,
    "component_name": "Lab256",
    "parent_name": null,
    "component_type": "checkbox",
    "component_caption": "Fasting Blood Sugar (FBS)",
    "checked": "N",
    "form_position_height": null,
    "font_name": null,
    "font_size": null,
    "font_color": null,
    "specimen_code": 0,
    "hos_guid": null
  },
  {
    "form_name": "CHEMISTRY",
    "lab_items_code": 257,
    "form_position_left": 77,
    "form_position_top": 253,
    "tab_order": null,
    "form_position_width": 98,
    "component_name": "Lab257",
    "parent_name": null,
    "component_type": "checkbox",
    "component_caption": "Creatinine",
    "checked": "N",
    "form_position_height": null,
    "font_name": null,
    "font_size": null,
    "font_color": null,
    "specimen_code": 0,
    "hos_guid": null
  },
  {
    "form_name": "CHEMISTRY",
    "lab_items_code": 258,
    "form_position_left": 85,
    "form_position_top": 117,
    "tab_order": null,
    "form_position_width": 98,
    "component_name": "Lab258",
    "parent_name": null,
    "component_type": "checkbox",
    "component_caption": "Uric acid",
    "checked": "N",
    "form_position_height": null,
    "font_name": null,
    "font_size": null,
    "font_color": null,
    "specimen_code": 0,
    "hos_guid": null
  },
  {
    "form_name": "CHEMISTRY",
    "lab_items_code": 259,
    "form_position_left": 389,
    "form_position_top": 197,
    "tab_order": null,
    "form_position_width": 162,
    "component_name": "Lab259",
    "parent_name": null,
    "component_type": "checkbox",
    "component_caption": "Total Choleserol",
    "checked": "N",
    "form_position_height": null,
    "font_name": null,
    "font_size": null,
    "font_color": null,
    "specimen_code": 0,
    "hos_guid": null
  },
  {
    "form_name": "CHEMISTRY",
    "lab_items_code": 260,
    "form_position_left": 389,
    "form_position_top": 173,
    "tab_order": null,
    "form_position_width": 154,
    "component_name": "Lab260",
    "parent_name": null,
    "component_type": "checkbox",
    "component_caption": "HDL Choleserol",
    "checked": "N",
    "form_position_height": null,
    "font_name": null,
    "font_size": null,
    "font_color": null,
    "specimen_code": 0,
    "hos_guid": null
  },
  {
    "form_name": "CHEMISTRY",
    "lab_items_code": 261,
    "form_position_left": 389,
    "form_position_top": 149,
    "tab_order": null,
    "form_position_width": 178,
    "component_name": "Lab261",
    "parent_name": null,
    "component_type": "checkbox",
    "component_caption": "LDL Choleserol",
    "checked": "N",
    "form_position_height": null,
    "font_name": null,
    "font_size": null,
    "font_color": null,
    "specimen_code": 0,
    "hos_guid": null
  },
  {
    "form_name": "CHEMISTRY",
    "lab_items_code": 262,
    "form_position_left": 389,
    "form_position_top": 125,
    "tab_order": null,
    "form_position_width": 98,
    "component_name": "Lab262",
    "parent_name": null,
    "component_type": "checkbox",
    "component_caption": "Triglyceride",
    "checked": "N",
    "form_position_height": null,
    "font_name": null,
    "font_size": null,
    "font_color": null,
    "specimen_code": 0,
    "hos_guid": null
  },
  {
    "form_name": "CHEMISTRY",
    "lab_items_code": 263,
    "form_position_left": 85,
    "form_position_top": 325,
    "tab_order": null,
    "form_position_width": 98,
    "component_name": "Lab263",
    "parent_name": null,
    "component_type": "checkbox",
    "component_caption": "Total protien",
    "checked": "N",
    "form_position_height": null,
    "font_name": null,
    "font_size": null,
    "font_color": null,
    "specimen_code": 0,
    "hos_guid": null
  }
]
```
