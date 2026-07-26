# `messagelog`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ksklogin | varchar(50) | YES |  | NULL |  |  |
| sendcomputer | varchar(50) | NO | PRI |  |  |  |
| senddatetime | datetime | NO | PRI | 0000-00-00 00:00:00 |  |  |
| sendfrom | varchar(15) | YES |  | NULL |  |  |
| sendmessage | text | YES |  | NULL |  |  |
| sendto | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_sendcomputer | sendcomputer | no | 1 |
| PRIMARY | sendcomputer | yes | 1 |
| PRIMARY | senddatetime | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
