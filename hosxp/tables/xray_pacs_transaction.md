# `xray_pacs_transaction`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_pacs_transaction_id | int(11) | NO | PRI | 0 |  |  |
| transaction_datetime | datetime | YES |  | NULL |  |  |
| xn | int(11) | YES |  | NULL |  |  |
| transaction_type_id | int(11) | YES |  | NULL |  |  |
| gateway_process | char(1) | YES | MUL | NULL |  |  |
| gateway_process_datetime | datetime | YES |  | NULL |  |  |
| pacs_lock | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| xn_encrypt | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_gateway_process | gateway_process | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | xray_pacs_transaction_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
