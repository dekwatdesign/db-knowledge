# `blb_reg_internal`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_reg_internal_id | int(11) | NO | PRI | 0 |  |  |
| blb_reg_internal_staff | varchar(50) | YES |  | NULL |  |  |
| blb_reg_internal_date | date | YES |  | NULL |  |  |
| blb_reg_internal_time | time | YES |  | NULL |  |  |
| blb_reg_internal_sender | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| blb_donator_id | int(11) | YES | MUL | NULL |  |  |
| blb_donation_center_id | int(11) | YES | MUL | NULL |  |  |
| blb_blood_origin_type_id | int(11) | YES | MUL | NULL |  |  |
| blb_reg_internal_qty | double(13,3) | YES |  | NULL |  |  |
| blb_reg_internal_total_cc | double(13,3) | YES |  | NULL |  |  |
| blb_reg_internal_note | varchar(250) | YES |  | NULL |  |  |
| blb_reg_internal_height | double(22,3) | YES |  | NULL |  |  |
| blb_reg_internal_weight | double(22,3) | YES |  | NULL |  |  |
| blb_reg_internal_bp1 | int(11) | YES |  | NULL |  |  |
| blb_reg_internal_bp2 | int(11) | YES |  | NULL |  |  |
| blb_reg_internal_hb | double(22,3) | YES |  | NULL |  |  |
| blb_reg_internal_plt_count | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_blood_origin_type_id | blb_blood_origin_type_id | no | 1 |
| ix_blb_donation_center_id | blb_donation_center_id | no | 1 |
| ix_blb_donator_id | blb_donator_id | no | 1 |
| PRIMARY | blb_reg_internal_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
