# `billrece`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| amount | double(22,3) | YES |  | NULL |  |  |
| bhc | char(1) | YES |  | NULL |  |  |
| btype | char(1) | YES |  | NULL |  |  |
| cbdate | datetime | YES |  | NULL |  |  |
| duedate | datetime | YES |  | NULL |  |  |
| ivdate | datetime | YES |  | NULL |  |  |
| invoice | varchar(150) | NO | PRI |  |  |  |
| premark | varchar(250) | YES |  | NULL |  |  |
| ptype | char(1) | YES |  | NULL |  |  |
| phmdlr | char(3) | YES |  | NULL |  |  |
| rbdate | datetime | YES |  | NULL |  |  |
| rtype | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | invoice | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
