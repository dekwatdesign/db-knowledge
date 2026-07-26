# `pt_medplan_route_lu`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| route_code | varchar(40) | NO | PRI |  |  |  |
| display_th | varchar(255) | YES |  | NULL |  |  |
| display_en | varchar(255) | YES |  | NULL |  |  |
| snomed_code | varchar(50) | YES |  | NULL |  |  |
| snomed_display | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | route_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
