# `bb_reaction`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bb_reaction_id | int(11) | NO | PRI | 0 |  |  |
| bb_reaction_hn | varchar(13) | YES |  | NULL |  |  |
| bb_reaction_date | date | YES |  | NULL |  |  |
| bb_reaction_unit | varchar(11) | YES |  | NULL |  |  |
| bb_reaction_note | varchar(255) | YES |  | NULL |  |  |
| bb_reaction_symptom | varchar(30) | YES |  | NULL |  |  |
| bb_reaction_ward | varchar(20) | YES |  | NULL |  |  |
| bb_reaction_usr | varchar(50) | YES |  | NULL |  |  |
| bb_reaction_product | int(11) | YES |  | NULL |  |  |
| bb_reaction_dngr | varchar(5) | YES |  | NULL |  |  |
| bb_reaction_ptgr | varchar(5) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bb_reaction_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
