# `patient_line_token`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| line_uid | varchar(250) | YES | UNI | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_line_uid | line_uid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
