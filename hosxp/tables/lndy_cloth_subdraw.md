# `lndy_cloth_subdraw`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_subdraw_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_subdraw_no | varchar(20) | YES |  | NULL |  |  |
| lndy_cloth_subdraw_approve | char(2) | YES |  | NULL |  |  |
| lndy_cloth_subdraw_date | datetime | YES |  | NULL |  |  |
| lndy_cloth_department_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_warehouse_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_subdraw_name | varchar(100) | YES |  | NULL |  |  |
| lndy_cloth_subdraw_rq_date | datetime | YES |  | NULL |  |  |
| lndy_cloth_subdraw_ap_name | varchar(100) | YES |  | NULL |  |  |
| lndy_cloth_subdraw_remark | text | YES |  | NULL |  |  |
| lndy_cloth_subdraw_status | char(2) | YES |  | NULL |  |  |
| doctor_code | varchar(6) | YES |  | NULL |  |  |
| doctor_approve_code | varchar(6) | YES |  | NULL |  |  |
| lndy_cloth_subdraw_date_ap | datetime | YES |  | NULL |  |  |
| lndy_cloth_subdraw_last_update | datetime | YES |  | NULL |  |  |
| lndy_cloth_subdraw_cancel | char(10) | YES |  | NULL |  |  |
| lndy_cloth_subdraw_c_date | date | YES |  | NULL |  |  |
| lndy_cloth_subdraw_c_note | varchar(200) | YES |  | NULL |  |  |
| doctor_code_cancel | varchar(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Reflndy_cloth_department9 | lndy_cloth_department_id | no | 1 |
| ix_Reflndy_cloth_warehouse8 | lndy_cloth_warehouse_id | no | 1 |
| PRIMARY | lndy_cloth_subdraw_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
