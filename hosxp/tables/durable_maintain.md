# `durable_maintain`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| durable_maintain_id | int(11) | NO | PRI | 0 |  |  |
| durable_maintain_date | date | YES |  | NULL |  |  |
| durable_maintain_doc | varchar(50) | YES |  | NULL |  |  |
| durable_maintain_sdate | date | YES |  | NULL |  |  |
| durable_maintain_edate | date | YES |  | NULL |  |  |
| durable_maintain_detail | text | YES |  | NULL |  |  |
| durable_maintain_price | double(15,2) | YES |  | NULL |  |  |
| durable_repairer_id | int(11) | YES |  | NULL |  |  |
| durable_maintain_note | text | YES |  | NULL |  |  |
| durable_id | int(11) | YES |  | NULL |  |  |
| durable_maintain_lastupdate | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | durable_maintain_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
