# `blb_hemolysis_icterus`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_hemolysis_icterus_id | int(11) | NO | PRI | 0 |  |  |
| blb_hemolysis_icterus_name | varchar(255) | YES |  | NULL |  |  |
| blb_hemolysis | varchar(255) | YES |  | NULL |  |  |
| blb_icterus | varchar(255) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| blb_transfusion_react_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refblb_transfusion_react1 | blb_transfusion_react_id | no | 1 |
| PRIMARY | blb_hemolysis_icterus_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
