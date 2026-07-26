# `inv_durable_good_maintain_doc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inv_durable_good_maintain_doc_id | int(11) | NO | PRI | 0 |  |  |
| inv_durable_good_maintain_id | int(11) | YES | MUL | NULL |  |  |
| inv_durable_good_maintain_doc | blob | YES |  | NULL |  |  |
| maintain_doc_name | varchar(255) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_inv_durable_good_maintain_id | inv_durable_good_maintain_id | no | 1 |
| ix_maintain_doc_name | maintain_doc_name | no | 1 |
| PRIMARY | inv_durable_good_maintain_doc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
