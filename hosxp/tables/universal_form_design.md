# `universal_form_design`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| universal_form_design_id | int(11) | NO | PRI | 0 |  |  |
| universal_form_id | int(11) | YES | MUL | NULL |  |  |
| universal_item_id | int(11) | YES |  | NULL |  |  |
| universal_control_class | varchar(150) | YES |  | NULL |  |  |
| universal_control_data | longtext | YES |  | NULL |  |  |
| universal_is_lookup | char(1) | YES |  | NULL |  |  |
| universal_lookup_table | varchar(100) | YES |  | NULL |  |  |
| universal_lookup_list_field | varchar(100) | YES |  | NULL |  |  |
| universal_lookup_key_field | varchar(100) | YES |  | NULL |  |  |
| universal_lookup_where | varchar(250) | YES |  | NULL |  |  |
| tab_order | int(11) | YES |  | NULL |  |  |
| onclick_script | longtext | YES |  | NULL |  |  |
| onenter_script | longtext | YES |  | NULL |  |  |
| onexit_script | longtext | YES |  | NULL |  |  |
| universal_object_name | varchar(150) | YES |  | NULL |  |  |
| parent | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| dws | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_universal_form_id | universal_form_id | no | 1 |
| PRIMARY | universal_form_design_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "universal_form_design_id": 1485,
    "universal_form_id": 7,
    "universal_item_id": 183,
    "universal_control_class": "TcxTextEdit",
    "universal_control_data": "object Scr183: TcxTextEdit\r\n  Left = 567\r\n  Top = 1226\r\n  Hint = #3648#3594#3639#3657#3629#3607#3637#3656#3614#3610\r\n  HelpContext = 183\r\n  ParentShowHint = False\r\n  ShowHint = True\r\n  TabOrder = 93\r\n  Width = 121\r\n\r\n\r\n\r\n\r\n\r\n\r\nend\r\n",
    "universal_is_lookup": null,
    "universal_lookup_table": null,
    "universal_lookup_list_field": null,
    "universal_lookup_key_field": null,
    "universal_lookup_where": null,
    "tab_order": 93,
    "onclick_script": null,
    "onenter_script": null,
    "onexit_script": null,
    "universal_object_name": "Scr183",
    "parent": null,
    "hos_guid": null,
    "dws": null
  },
  {
    "universal_form_design_id": 1486,
    "universal_form_id": 7,
    "universal_item_id": 0,
    "universal_control_class": "TcxLabel",
    "universal_control_data": "object Label1503: TcxLabel\r\n  Left = 501\r\n  Top = 1228\r\n  Caption = #3648#3594#3639#3657#3629#3607#3637#3656#3614#3610\r\n  Transparent = True\r\nend\r\n",
    "universal_is_lookup": null,
    "universal_lookup_table": null,
    "universal_lookup_list_field": null,
    "universal_lookup_key_field": null,
    "universal_lookup_where": null,
    "tab_order": 92,
    "onclick_script": null,
    "onenter_script": null,
    "onexit_script": null,
    "universal_object_name": "Label1503",
    "parent": null,
    "hos_guid": null,
    "dws": null
  },
  {
    "universal_form_design_id": 1487,
    "universal_form_id": 7,
    "universal_item_id": 182,
    "universal_control_class": "TcxTextEdit",
    "universal_control_data": "object Scr182: TcxTextEdit\r\n  Left = 374\r\n  Top = 1226\r\n  Hint = '7.1.1'\r\n  HelpContext = 182\r\n  ParentShowHint = False\r\n  ShowHint = True\r\n  TabOrder = 91\r\n  Width = 121\r\n\r\n\r\n\r\n\r\n\r\n\r\nend\r\n",
    "universal_is_lookup": null,
    "universal_lookup_table": null,
    "universal_lookup_list_field": null,
    "universal_lookup_key_field": null,
    "universal_lookup_where": null,
    "tab_order": 91,
    "onclick_script": null,
    "onenter_script": null,
    "onexit_script": null,
    "universal_object_name": "Scr182",
    "parent": null,
    "hos_guid": null,
    "dws": null
  },
  {
    "universal_form_design_id": 1488,
    "universal_form_id": 7,
    "universal_item_id": 179,
    "universal_control_class": "TcxDBRadioGroup",
    "universal_control_data": "object RadioGroup179: TcxDBRadioGroup\r\n  Left = 151\r\n  Top = 1186\r\n  Hint = '7. '#3626#3619#3640#3611#3612#3621#3585#3634#3619#3605#3636#3604#3648#3594#3639#3657#3629\r\n  HelpContext = 179\r\n  Caption = '7. '#3626#3619#3640#3611#3612#3621#3585#3634#3619#3605#3636#3604#3648#3594#3639#3657#3629\r\n  DataBinding.DataField = 'universal_item_value_text'\r\n  ParentShowHint = False\r\n  Properties.Items = <\r\n    item\r\n      Caption = #3605#3636#3604#3648#3594#3639#3657#3629#3651#3609#3650#3619#3591#3614#3618#3634#3610#3634#3621' '#3607#3637#3656#3605#3635#3649#3627#3609#3656#3591\r\n      Value = '701'\r\n    end>\r\n  ShowHint = True\r\n  TabOrder = 90\r\n  Height = 89\r\n  Width = 657\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nend\r\n",
    "universal_is_lookup": null,
    "universal_lookup_table": null,
    "universal_lookup_list_field": null,
    "universal_lookup_key_field": null,
    "universal_lookup_where": null,
    "tab_order": 90,
    "onclick_script": null,
    "onenter_script": null,
    "onexit_script": null,
    "universal_object_name": "RadioGroup179",
    "parent": null,
    "hos_guid": null,
    "dws": null
  },
  {
    "universal_form_design_id": 1489,
    "universal_form_id": 7,
    "universal_item_id": 0,
    "universal_control_class": "TListBox",
    "universal_control_data": "object UEListBox4867: TListBox\r\n  Left = 449\r\n  Top = 263\r\n  Width = 121\r\n  Height = 97\r\n  ItemHeight = 20\r\n  TabOrder = 89\r\nend\r\n",
    "universal_is_lookup": null,
    "universal_lookup_table": null,
    "universal_lookup_list_field": null,
    "universal_lookup_key_field": null,
    "universal_lookup_where": null,
    "tab_order": 89,
    "onclick_script": null,
    "onenter_script": null,
    "onexit_script": null,
    "universal_object_name": "UEListBox4867",
    "parent": null,
    "hos_guid": null,
    "dws": null
  },
  {
    "universal_form_design_id": 1490,
    "universal_form_id": 7,
    "universal_item_id": 0,
    "universal_control_class": "TcxLabel",
    "universal_control_data": "object UELabel7968: TcxLabel\r\n  Left = 510\r\n  Top = 187\r\n  Caption = 'Label'\r\n  Transparent = True\r\nend\r\n",
    "universal_is_lookup": null,
    "universal_lookup_table": null,
    "universal_lookup_list_field": null,
    "universal_lookup_key_field": null,
    "universal_lookup_where": null,
    "tab_order": 88,
    "onclick_script": null,
    "onenter_script": null,
    "onexit_script": null,
    "universal_object_name": "UELabel7968",
    "parent": null,
    "hos_guid": null,
    "dws": null
  },
  {
    "universal_form_design_id": 1491,
    "universal_form_id": 7,
    "universal_item_id": 0,
    "universal_control_class": "TcxLabel",
    "universal_control_data": "object UELabel379: TcxLabel\r\n  Left = 533\r\n  Top = 1149\r\n  Caption = #3612#3621\r\n  Transparent = True\r\nend\r\n",
    "universal_is_lookup": null,
    "universal_lookup_table": null,
    "universal_lookup_list_field": null,
    "universal_lookup_key_field": null,
    "universal_lookup_where": null,
    "tab_order": 87,
    "onclick_script": null,
    "onenter_script": null,
    "onexit_script": null,
    "universal_object_name": "UELabel379",
    "parent": null,
    "hos_guid": null,
    "dws": null
  },
  {
    "universal_form_design_id": 1492,
    "universal_form_id": 7,
    "universal_item_id": 0,
    "universal_control_class": "TcxLabel",
    "universal_control_data": "object UELabel8211: TcxLabel\r\n  Left = 533\r\n  Top = 1117\r\n  Caption = #3612#3621\r\n  Transparent = True\r\nend\r\n",
    "universal_is_lookup": null,
    "universal_lookup_table": null,
    "universal_lookup_list_field": null,
    "universal_lookup_key_field": null,
    "universal_lookup_where": null,
    "tab_order": 86,
    "onclick_script": null,
    "onenter_script": null,
    "onexit_script": null,
    "universal_object_name": "UELabel8211",
    "parent": null,
    "hos_guid": null,
    "dws": null
  }
]
```
