# `opd_allergy_pc_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_allergy_pc_group_id | int(11) | NO | PRI | 0 |  |  |
| opd_allergy_id | int(11) | YES | MUL | NULL |  |  |
| pharmacology_group_id | int(11) | YES |  | NULL |  |  |
| cross_check | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opd_allergy_id | opd_allergy_id | no | 1 |
| ix_opd_allergy_pc_id | opd_allergy_id | no | 1 |
| ix_opd_allergy_pc_id | pharmacology_group_id | no | 2 |
| PRIMARY | opd_allergy_pc_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
