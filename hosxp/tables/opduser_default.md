# `opduser_default`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opduser_default_id | int(11) | NO | PRI | 0 |  |  |
| loginname | varchar(250) | YES |  | NULL |  |  |
| use_remed_default | char(1) | YES |  | NULL |  |  |
| remed_default_rx | char(1) | YES |  | NULL |  |  |
| remed_default_nonrx | char(1) | YES |  | NULL |  |  |
| remed_default_dx | char(1) | YES |  | NULL |  |  |
| use_default_doctor_confirm | char(1) | YES |  | NULL |  |  |
| doctor_confirm_default_depcode | varchar(3) | YES |  | NULL |  |  |
| disable_cloud_messenger | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | opduser_default_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "opduser_default_id": 1,
    "loginname": "yuwa273",
    "use_remed_default": null,
    "remed_default_rx": "Y",
    "remed_default_nonrx": null,
    "remed_default_dx": null,
    "use_default_doctor_confirm": null,
    "doctor_confirm_default_depcode": null,
    "disable_cloud_messenger": null,
    "hos_guid": null
  }
]
```
