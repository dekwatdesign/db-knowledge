# `iclaim_opd_discharge_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_opd_discharge_detail_id | int(11) | NO | PRI | 0 |  |  |
| order_sequence | int(11) | YES |  | NULL |  |  |
| policy_number | varchar(200) | YES |  | NULL |  |  |
| coverage_code | varchar(200) | YES |  | NULL |  |  |
| trailer_number | varchar(200) | YES |  | NULL |  |  |
| benefit_code | varchar(200) | YES |  | NULL |  |  |
| approved_amount | double(15,3) | YES |  | NULL |  |  |
| copay_amount | double(15,3) | YES |  | NULL |  |  |
| excess_amount | double(15,3) | YES |  | NULL |  |  |
| non_cover | double(15,3) | YES |  | NULL |  |  |
| result_description | text | YES |  | NULL |  |  |
| iclaim_opd_discharge_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_iclaim_opd_discharge_id | iclaim_opd_discharge_id | no | 1 |
| PRIMARY | iclaim_opd_discharge_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
