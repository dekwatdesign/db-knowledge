# `forensic_relation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| forensic_relation_id | int(11) | NO | PRI | 0 |  |  |
| forensic_relation_type_id | int(11) | YES |  | NULL |  |  |
| pname | varchar(15) | YES |  | NULL |  |  |
| fname | varchar(50) | YES |  | NULL |  |  |
| lname | varchar(50) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| phone | varchar(10) | YES |  | NULL |  |  |
| addrpart | varchar(25) | YES |  | NULL |  |  |
| moo | int(11) | YES |  | NULL |  |  |
| soi | varchar(50) | YES |  | NULL |  |  |
| road | varchar(50) | YES |  | NULL |  |  |
| chwpart | char(2) | YES |  | NULL |  |  |
| amppart | char(2) | YES |  | NULL |  |  |
| tmbpart | char(2) | YES |  | NULL |  |  |
| pocode | varchar(6) | YES |  | NULL |  |  |
| forensic_death_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | forensic_relation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
