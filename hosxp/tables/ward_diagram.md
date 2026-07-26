# `ward_diagram`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ward_diagram_id | int(11) | NO | PRI | 0 |  |  |
| ward | varchar(4) | YES | MUL | NULL |  |  |
| ward_diagram_type_id | int(11) | YES |  | NULL |  |  |
| ward_diagram | longblob | YES |  | NULL |  |  |
| zoom_percent | double(15,2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ward_diagram_type | ward | yes | 1 |
| ix_ward_diagram_type | ward_diagram_type_id | yes | 2 |
| PRIMARY | ward_diagram_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
