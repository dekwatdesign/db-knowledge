# `ovst_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_template_id | int(11) | NO | PRI | 0 |  |  |
| template_name | varchar(200) | YES |  | NULL |  |  |
| staff | varchar(50) | YES | MUL | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| spclty | char(2) | YES |  | NULL |  |  |
| sub_spclty_id | int(11) | YES |  | NULL |  |  |
| er_pt_type | int(11) | YES |  | NULL |  |  |
| ovstist | char(2) | YES |  | NULL |  |  |
| pt_priority | int(11) | YES |  | NULL |  |  |
| cur_dep | char(3) | YES |  | NULL |  |  |
| visit_type | char(1) | YES |  | NULL |  |  |
| pt_subtype | int(11) | YES |  | NULL |  |  |
| main_dep | char(3) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_staff | staff | no | 1 |
| PRIMARY | ovst_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
