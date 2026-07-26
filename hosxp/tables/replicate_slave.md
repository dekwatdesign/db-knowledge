# `replicate_slave`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| host | varchar(50) | YES | UNI | NULL |  |  |
| database | varchar(20) | YES |  | NULL |  |  |
| username | varchar(20) | YES |  | NULL |  |  |
| password | varchar(50) | YES |  | NULL |  |  |
| slave_no | int(11) | YES |  | NULL |  |  |
| init_wait | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| host_unique | host | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "host": "192.168.11.3",
    "database": "hos",
    "username": "ycaphis",
    "password": "*yc@phi5",
    "slave_no": null,
    "init_wait": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
