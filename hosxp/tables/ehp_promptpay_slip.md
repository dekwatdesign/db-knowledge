# `ehp_promptpay_slip`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ehp_promptpay_slip_id | int(11) | NO | PRI | 0 |  |  |
| ehp_promptpay_slip_img | longblob | YES |  | NULL |  |  |
| ehp_promptpay_slip_datetime | datetime | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| finance_number | varchar(7) | YES |  | NULL |  |  |
| rcpno | varchar(20) | YES |  | NULL |  |  |
| bill_amount | double(12,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_consent_slip_vn | vn | no | 1 |
| PRIMARY | ehp_promptpay_slip_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
