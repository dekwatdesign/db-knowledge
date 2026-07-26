# `handicapped_hhc_team`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_hhc_team_id | int(11) | NO | PRI | 0 |  |  |
| doctorcode | char(11) | YES |  | NULL |  |  |
| doctorposition | char(11) | YES |  | NULL |  |  |
| handicapped_hhc_id | char(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_hhc_team_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
