# `customer_prsc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| customer_prsc_id | int(11) | NO | PRI | 0 |  |  |
| customer_id | int(11) | YES | MUL | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| prsc_date | date | YES |  | NULL |  |  |
| prsc_time | time | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| item_count | int(11) | YES |  | NULL |  |  |
| total_price_before_discount | double(15,3) | YES |  | NULL |  |  |
| total_discount | double(15,3) | YES |  | NULL |  |  |
| total_price | double(15,3) | YES |  | NULL |  |  |
| total_vat | double(15,3) | YES |  | NULL |  |  |
| customer_prsc_paid_type_id | int(11) | YES |  | NULL |  |  |
| vt_bps | int(11) | YES |  | NULL |  |  |
| vt_bpd | int(11) | YES |  | NULL |  |  |
| vt_temperature | double(15,3) | YES |  | NULL |  |  |
| vt_body_weight | double(15,3) | YES |  | NULL |  |  |
| vt_body_height | double(15,3) | YES |  | NULL |  |  |
| vt_bmi | double(15,3) | YES |  | NULL |  |  |
| vt_fbs | double(15,3) | YES |  | NULL |  |  |
| vt_symptom | text | YES |  | NULL |  |  |
| vt_hr | int(11) | YES |  | NULL |  |  |
| vt_tg | double(15,3) | YES |  | NULL |  |  |
| vt_hdl | double(15,3) | YES |  | NULL |  |  |
| vt_ldl | double(15,3) | YES |  | NULL |  |  |
| advice_text | text | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| rcpt_no | varchar(100) | YES |  | NULL |  |  |
| pay_status | char(1) | YES |  | NULL |  |  |
| vat | double(15,3) | YES |  | NULL |  |  |
| total_price_before_vat | double(15,3) | YES |  | NULL |  |  |
| cash_received | double(15,3) | YES |  | NULL |  |  |
| total_price_use_point | double(15,3) | YES |  | NULL |  |  |
| discount_point | double(15,3) | YES |  | NULL |  |  |
| use_point_exchange | int(11) | YES |  | NULL |  |  |
| customer_vn | varchar(13) | YES |  | NULL |  |  |
| symptom_note | text | YES |  | NULL |  |  |
| symptom_note_lastupdate | datetime | YES |  | NULL |  |  |
| follow_up_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_customer_id | customer_id | no | 1 |
| PRIMARY | customer_prsc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
