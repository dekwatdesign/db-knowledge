# `blb_reg_external`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_reg_external_id | int(11) | NO | PRI | 0 |  |  |
| blb_reg_external_staff | varchar(50) | YES |  | NULL |  |  |
| blb_reg_external_date | date | YES |  | NULL |  |  |
| blb_reg_external_time | time | YES |  | NULL |  |  |
| blb_reg_external_sender | varchar(100) | YES |  | NULL |  |  |
| blb_donation_association_id | int(11) | YES | MUL | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| blb_reg_external_total_cc | double(13,3) | YES |  | NULL |  |  |
| blb_reg_external_qty | double(13,3) | YES |  | NULL |  |  |
| blb_reg_external_note | varchar(250) | YES |  | NULL |  |  |
| blb_reg_available_date | date | YES |  | NULL |  |  |
| hosp_code | varchar(255) | YES |  | NULL |  |  |
| blb_reg_external_filename | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_donation_association_id | blb_donation_association_id | no | 1 |
| PRIMARY | blb_reg_external_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
