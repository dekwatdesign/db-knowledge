# `lndy_cloth_draw`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_draw_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_draw_name | char(200) | YES |  | NULL |  |  |
| lndy_cloth_draw_complete_name | char(200) | YES |  | NULL |  |  |
| lndy_cloth_draw_no | varchar(20) | YES |  | NULL |  |  |
| lndy_cloth_draw_approve | char(2) | YES |  | NULL |  |  |
| lndy_cloth_draw_receive_date | datetime | YES |  | NULL |  |  |
| lndy_cloth_draw_date | datetime | YES |  | NULL |  |  |
| lndy_cloth_draw_officer_name | varchar(25) | YES |  | NULL |  |  |
| lndy_cloth_draw_cancel | varchar(30) | YES |  | NULL |  |  |
| lndy_cloth_draw_itemcount | int(11) | YES |  | NULL |  |  |
| lndy_cloth_subdraw_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_warehouse_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_draw_note | text | YES |  | NULL |  |  |
| lndy_cloth_department_id | int(11) | YES | MUL | NULL |  |  |
| doctor_code | varchar(6) | YES |  | NULL |  |  |
| doctor_approve_code | varchar(6) | YES |  | NULL |  |  |
| lndy_cloth_draw_date_approve | datetime | YES |  | NULL |  |  |
| lndy_cloth_draw_last_update | datetime | YES |  | NULL |  |  |
| lndy_cloth_draw_c_name | varchar(100) | YES |  | NULL |  |  |
| lndy_cloth_draw_c_note | varchar(200) | YES |  | NULL |  |  |
| lndy_cloth_draw_c_date | date | YES |  | NULL |  |  |
| doctor_code_cancel | varchar(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_cloth_department_id | lndy_cloth_department_id | no | 1 |
| ix_lndy_cloth_warehouse_id | lndy_cloth_warehouse_id | no | 1 |
| ix_Reflndy_cloth_subdraw13 | lndy_cloth_subdraw_id | no | 1 |
| PRIMARY | lndy_cloth_draw_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
