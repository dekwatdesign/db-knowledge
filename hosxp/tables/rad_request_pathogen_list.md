# `rad_request_pathogen_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rad_request_pathogen_list_id | int(11) | NO | PRI | 0 |  |  |
| rad_request_pathogen_type_id | int(11) | YES |  | NULL |  |  |
| rad_request_list_id | int(11) | YES |  | NULL |  |  |
| pathogen_text | text | YES |  | NULL |  |  |
| selected | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | rad_request_pathogen_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
