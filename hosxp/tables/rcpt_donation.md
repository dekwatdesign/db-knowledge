# `rcpt_donation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rcpt_donation_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| donation_date | date | YES |  | NULL |  |  |
| donation_time | time | YES |  | NULL |  |  |
| ref_code | varchar(50) | YES |  | NULL |  |  |
| computer_name | varchar(50) | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| donation_amount | double(22,2) | YES |  | NULL |  |  |
| donation_doc_no | varchar(50) | YES | MUL | NULL |  |  |
| kiosk_ref_no | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_donation_doc_no | donation_doc_no | no | 1 |
| ix_hn | hn | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | rcpt_donation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
