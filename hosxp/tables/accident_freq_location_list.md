# `accident_freq_location_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| accident_freq_location_list_id | int(11) | NO | PRI | 0 |  |  |
| accident_location_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_accident_location_name | accident_location_name | yes | 1 |
| PRIMARY | accident_freq_location_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
