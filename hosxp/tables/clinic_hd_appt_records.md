# `clinic_hd_appt_records`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_hd_appt_records_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| clinic_hd_appt_records_mac_id | int(11) | YES |  | NULL |  |  |
| clinic_hd_appt_records_slt_id | int(11) | YES |  | NULL |  |  |
| clinic_hd_appt_records_date | datetime | YES | MUL | NULL |  |  |
| clinic_hd_appt_records_type | char(1) | YES |  | NULL |  |  |
| clinic_hd_appt_records_status | char(1) | YES |  | NULL |  |  |
| clinic_hd_appt_records_note | text | YES |  | NULL |  |  |
| clinic_hd_appt_records_staff | varchar(15) | YES |  | NULL |  |  |
| clinic_hd_appt_records_created | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_appt_date_status | clinic_hd_appt_records_date | no | 1 |
| ix_idx_appt_date_status | clinic_hd_appt_records_status | no | 2 |
| ix_idx_appt_hn_date_status | clinic_hd_appt_records_date | no | 1 |
| ix_idx_appt_hn_date_status | clinic_hd_appt_records_status | no | 2 |
| ix_idx_appt_hn_date_status | hn | no | 3 |
| ix_idx_appt_mac_date_slt_status | clinic_hd_appt_records_date | no | 1 |
| ix_idx_appt_mac_date_slt_status | clinic_hd_appt_records_mac_id | no | 2 |
| ix_idx_appt_mac_date_slt_status | clinic_hd_appt_records_slt_id | no | 3 |
| ix_idx_appt_mac_date_slt_status | clinic_hd_appt_records_status | no | 4 |
| PRIMARY | clinic_hd_appt_records_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
