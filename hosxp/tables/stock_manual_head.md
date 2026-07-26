# `stock_manual_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_manual_id | int(11) | NO | PRI | 0 |  |  |
| draw_date | date | YES | MUL | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| note | varchar(250) | YES |  | NULL |  |  |
| approve | char(1) | YES |  | NULL |  |  |
| authorizer | varchar(50) | YES |  | NULL |  |  |
| authorize_date | date | YES |  | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| doc_no | varchar(100) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| runnumber | int(11) | YES |  | NULL |  |  |
| number_year | varchar(4) | YES |  | NULL |  |  |
| number_month | varchar(4) | YES |  | NULL |  |  |
| stock_manual_document_id | varchar(50) | YES |  | NULL |  |  |
| status_appove_data | char(1) | YES |  | NULL |  |  |
| transaction_datetime | datetime | YES |  | NULL |  |  |
| sp_status | varchar(200) | YES |  | NULL |  |  |
| sp_ok | char(1) | YES |  | NULL |  |  |
| draw_expire | char(1) | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| stock_manual_reason_id | int(11) | YES |  | NULL |  |  |
| stock_manual_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_draw_date | draw_date | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_manual_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
