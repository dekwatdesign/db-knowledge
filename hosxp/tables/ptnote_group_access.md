# `ptnote_group_access`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ptnote_group_access_id | int(11) | NO | PRI | 0 |  |  |
| ptnote_id | int(11) | YES | MUL | NULL |  |  |
| officer_group_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ptnote_id | ptnote_id | no | 1 |
| ix_ptnote_id_group | ptnote_id | yes | 1 |
| ix_ptnote_id_group | officer_group_id | yes | 2 |
| ix_ptnote_id_group_index | officer_group_id | yes | 1 |
| ix_ptnote_id_group_index | ptnote_id | yes | 2 |
| PRIMARY | ptnote_group_access_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
