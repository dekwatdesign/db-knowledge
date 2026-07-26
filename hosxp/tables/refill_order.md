# `refill_order`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| order_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(15) | YES | MUL | NULL |  |  |
| plan_id | int(11) | YES | MUL | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| original_vn | varchar(20) | YES |  | NULL |  |  |
| clinic_code | varchar(10) | YES |  | NULL |  |  |
| start_date | date | YES |  | NULL |  |  |
| end_date | date | YES |  | NULL |  |  |
| total_refills | int(11) | YES |  | NULL |  |  |
| completed_refills | int(11) | YES |  | NULL |  |  |
| delivery_method | varchar(20) | YES |  | NULL |  |  |
| delivery_address | text | YES |  | NULL |  |  |
| order_status | varchar(20) | YES | MUL | NULL |  |  |
| pause_reason | varchar(255) | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_refill_order_hn | hn | no | 1 |
| ix_idx_refill_order_plan | plan_id | no | 1 |
| ix_idx_refill_order_status | order_status | no | 1 |
| PRIMARY | order_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
