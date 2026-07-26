# `hismember`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| addrpart | varchar(10) | YES |  | NULL |  |  |
| amppart | char(2) | YES |  | NULL |  |  |
| birthday | datetime | YES |  | NULL |  |  |
| czcode | varchar(17) | YES |  | NULL |  |  |
| chwpart | char(2) | YES |  | NULL |  |  |
| fname | varchar(50) | YES |  | NULL |  |  |
| lname | varchar(50) | YES |  | NULL |  |  |
| matchhn | varchar(7) | YES |  | NULL |  |  |
| moopart | varchar(10) | YES |  | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| tmbpart | char(2) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
