# `rcpt_bill_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rcpt_bill_list_id | int(11) | NO | PRI | 0 |  |  |
| rcpt_book_no | int(11) | YES | MUL | NULL |  |  |
| rcpt_book_name | varchar(200) | YES |  | NULL |  |  |
| rcpt_bill_list_date | date | YES |  | NULL |  |  |
| rcpt_bill_list_active | char(1) | YES |  | NULL |  |  |
| rcpt_bill_list_depcode | char(3) | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| last_bill_no | int(11) | YES |  | NULL |  |  |
| last_bill_datetime | datetime | YES |  | NULL |  |  |
| rcpt_bill_note | text | YES |  | NULL |  |  |
| max_bill_no | int(11) | YES |  | NULL |  |  |
| start_bill_no | int(11) | YES |  | NULL |  |  |
| end_bill_no | int(11) | YES |  | NULL |  |  |
| resp_officer_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_rcpt_book_no | rcpt_book_no | no | 1 |
| PRIMARY | rcpt_bill_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
