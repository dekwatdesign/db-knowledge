# `opd_qs_sound`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_qs_sound_id | int(11) | NO | PRI | 0 |  |  |
| sound_file_name | varchar(200) | YES | UNI | NULL |  |  |
| sound_data | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_unique_file_name | sound_file_name | yes | 1 |
| PRIMARY | opd_qs_sound_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
