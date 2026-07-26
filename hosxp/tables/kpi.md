# `kpi`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| kpi_id | int(11) | NO | PRI | 0 |  |  |
| kpi_name | varchar(200) | YES | UNI | NULL |  |  |
| kpi_topic_code | varchar(10) | YES |  | NULL |  |  |
| kpi_description_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_kpi_name | kpi_name | yes | 1 |
| PRIMARY | kpi_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
