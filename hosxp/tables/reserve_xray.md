# `reserve_xray`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| reserve_xray_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| reserve_xray_date | date | YES |  | NULL |  |  |
| reserve_xray_time | time | YES |  | NULL |  |  |
| reserve_xray_request_doctor | varchar(15) | YES |  | NULL |  |  |
| reserve_xray_request_depcode | char(3) | YES |  | NULL |  |  |
| reserve_xray_need_result_date | date | YES |  | NULL |  |  |
| reserve_xray_need_result_time | time | YES |  | NULL |  |  |
| reserve_xray_clinical_diag | text | YES |  | NULL |  |  |
| reserve_xray_information | text | YES |  | NULL |  |  |
| reserve_xray_reason_note | text | YES |  | NULL |  |  |
| reserve_xray_confirm_staff | varchar(15) | YES |  | NULL |  |  |
| reserve_xray_confirm_status | char(1) | YES |  | NULL |  |  |
| reserve_xray_confirm_date | date | YES |  | NULL |  |  |
| reserve_xray_confirm_time | time | YES |  | NULL |  |  |
| reserve_xray_patient_type | char(3) | YES |  | NULL |  |  |
| reserve_xray_entry_staff | varchar(15) | YES |  | NULL |  |  |
| reserve_xray_items_id | int(11) | YES | MUL | NULL |  |  |
| reserve_xray_items_group_id | int(11) | YES | MUL | NULL |  |  |
| reserve_xray_priority_id | int(11) | YES |  | NULL |  |  |
| reserve_xray_entry_date_time | datetime | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| oapp_id | int(11) | YES | MUL | NULL |  |  |
| reserve_xray_datetime | datetime | YES |  | NULL |  |  |
| reserve_xray_need_result_dt | datetime | YES |  | NULL |  |  |
| reserve_xray_confirm_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_reserve_xray_hn_idx | hn | no | 1 |
| ix_reserve_xray_items_group_id_idx | reserve_xray_items_group_id | no | 1 |
| ix_reserve_xray_items_id_idx | reserve_xray_items_id | no | 1 |
| ix_reserve_xray_oapp_id_idx | oapp_id | no | 1 |
| ix_reserve_xray_vn_idx | vn | no | 1 |
| PRIMARY | reserve_xray_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
