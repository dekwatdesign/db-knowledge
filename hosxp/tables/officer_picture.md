# `officer_picture`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| officer_picture_id | int(11) | NO | PRI | 0 |  |  |
| officer_id | int(11) | YES | UNI | NULL |  |  |
| officer_picture_blob | longblob | YES |  | NULL |  |  |
| width | int(11) | YES |  | NULL |  |  |
| height | int(11) | YES |  | NULL |  |  |
| capture_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_officer_id | officer_id | yes | 1 |
| PRIMARY | officer_picture_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
