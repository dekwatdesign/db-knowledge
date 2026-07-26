# `issue_attachment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| issue_attachment_id | int(11) | NO | PRI | 0 |  |  |
| issue_id | int(11) | YES | MUL | NULL |  |  |
| issue_attachment_name | varchar(200) | YES |  | NULL |  |  |
| issue_attachment_size | int(11) | YES |  | NULL |  |  |
| issue_attachment_datetime | datetime | YES |  | NULL |  |  |
| issue_attachment_data_blob | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_issue_id | issue_id | no | 1 |
| PRIMARY | issue_attachment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
