# `xe_application_sil`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xe_application_sil_id | int(11) | NO | PRI | 0 |  |  |
| sil_name | varchar(200) | YES | UNI | NULL |  |  |
| sil_data | longblob | YES |  | NULL |  |  |
| sil_md5 | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_sil_name | sil_name | yes | 1 |
| PRIMARY | xe_application_sil_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
