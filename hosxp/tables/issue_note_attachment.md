# `issue_note_attachment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| issue_note_attachment_id | int(11) | NO | PRI | 0 |  |  |
| issue_note_id | int(11) | YES |  | NULL |  |  |
| issue_note_data_blob | longblob | YES |  | NULL |  |  |
| attachment_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | issue_note_attachment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
