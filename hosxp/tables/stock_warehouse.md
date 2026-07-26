# `stock_warehouse`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| warehouse_id | int(11) | NO | PRI | 0 |  |  |
| warehouse_name | varchar(150) | YES | UNI | NULL |  |  |
| warehouse_officer_po_name | varchar(250) | YES |  | NULL |  |  |
| warehouse_officer_po_position | varchar(200) | YES |  | NULL |  |  |
| warehouse_officer_director_name | varchar(150) | YES |  | NULL |  |  |
| warehouse_officer_director_position | varchar(150) | YES |  | NULL |  |  |
| warehouse_officer_chairman_name | varchar(150) | YES |  | NULL |  |  |
| warehouse_officer_chairman_position | varchar(150) | YES |  | NULL |  |  |
| warehouse_officer_board_name1 | varchar(150) | YES |  | NULL |  |  |
| warehouse_officer_board_position1 | varchar(150) | YES |  | NULL |  |  |
| warehouse_officer_board_name2 | varchar(150) | YES |  | NULL |  |  |
| warehouse_officer_board_position2 | varchar(150) | YES |  | NULL |  |  |
| oldcode | varchar(20) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| warehouse_responsible_officer | varchar(200) | YES |  | NULL |  |  |
| warehouse_location | varchar(250) | YES |  | NULL |  |  |
| warehouse_active | char(1) | YES |  | NULL |  |  |
| warehouse_code | varchar(10) | YES |  | NULL |  |  |
| warehouse_write_po_name | varchar(250) | YES |  | NULL |  |  |
| warehouse_write_po_position | varchar(250) | YES |  | NULL |  |  |
| warehouse_issue_name | varchar(250) | YES |  | NULL |  |  |
| warehouse_issue_position | varchar(250) | YES |  | NULL |  |  |
| warehouse_prefact | varchar(20) | YES |  | NULL |  |  |
| warehouse_default | char(1) | YES |  | NULL |  |  |
| document_prefix | varchar(5) | YES |  | NULL |  |  |
| deliver_document_prefix | varchar(5) | YES |  | NULL |  |  |
| warehouse_type_id | int(11) | YES |  | NULL |  |  |
| vmi_enabled | char(1) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | warehouse_name | yes | 1 |
| ix_vmi_enabled | vmi_enabled | no | 1 |
| PRIMARY | warehouse_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "warehouse_id": 1,
    "warehouse_name": "คลังใหญ่",
    "warehouse_officer_po_name": null,
    "warehouse_officer_po_position": null,
    "warehouse_officer_director_name": null,
    "warehouse_officer_director_position": null,
    "warehouse_officer_chairman_name": null,
    "warehouse_officer_chairman_position": null,
    "warehouse_officer_board_name1": null,
    "warehouse_officer_board_position1": null,
    "warehouse_officer_board_name2": null,
    "warehouse_officer_board_position2": null,
    "oldcode": null,
    "hos_guid": null,
    "warehouse_responsible_officer": "[MASKED_FULLNAME]",
    "warehouse_location": null,
    "warehouse_active": "Y",
    "warehouse_code": null,
    "warehouse_write_po_name": null,
    "warehouse_write_po_position": null,
    "warehouse_issue_name": null,
    "warehouse_issue_position": null,
    "warehouse_prefact": null,
    "warehouse_default": null,
    "document_prefix": null,
    "deliver_document_prefix": null,
    "warehouse_type_id": null,
    "vmi_enabled": null
  }
]
```
