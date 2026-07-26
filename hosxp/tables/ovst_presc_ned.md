# `ovst_presc_ned`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_presc_ned_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| doctor | varchar(9) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| presc_reason | varchar(250) | YES |  | NULL |  |  |
| presc_datetime | datetime | YES |  | NULL |  |  |
| presc_reason_2 | varchar(250) | YES |  | NULL |  |  |
| presc_reason_3 | varchar(250) | YES |  | NULL |  |  |
| presc_reason_4 | varchar(250) | YES |  | NULL |  |  |
| presc_reason_5 | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| nhso_authorize_code | varchar(20) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES | MUL | NULL |  |  |
| reason_ea | char(1) | YES |  | NULL |  |  |
| reason_eb | char(1) | YES |  | NULL |  |  |
| reason_ec | char(1) | YES |  | NULL |  |  |
| reason_ed | char(1) | YES |  | NULL |  |  |
| reason_ee | char(1) | YES |  | NULL |  |  |
| reason_ef | char(1) | YES |  | NULL |  |  |
| print_count | int(11) | YES |  | NULL |  |  |
| reason_all | varchar(100) | YES |  | NULL |  |  |
| key_data | varchar(50) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_key_data | key_data | no | 1 |
| ix_opi_guid | opi_guid | no | 1 |
| ix_unique_ix | vn | yes | 1 |
| ix_unique_ix | doctor | yes | 2 |
| ix_unique_ix | icode | yes | 3 |
| ix_unique_ix_index | doctor | yes | 1 |
| ix_unique_ix_index | icode | yes | 2 |
| ix_unique_ix_index | vn | yes | 3 |
| ix_vn | vn | no | 1 |
| PRIMARY | ovst_presc_ned_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "ovst_presc_ned_id": 1,
    "vn": "670328112637",
    "doctor": "361",
    "icode": "1610003",
    "presc_reason": "EF",
    "presc_datetime": "2024-03-28 12:11:55",
    "presc_reason_2": "",
    "presc_reason_3": "",
    "presc_reason_4": "",
    "presc_reason_5": "",
    "hos_guid": null,
    "nhso_authorize_code": "121",
    "opi_guid": null,
    "reason_ea": null,
    "reason_eb": null,
    "reason_ec": null,
    "reason_ed": null,
    "reason_ee": null,
    "reason_ef": null,
    "print_count": null,
    "reason_all": null,
    "key_data": null
  },
  {
    "ovst_presc_ned_id": 2,
    "vn": "680409140022",
    "doctor": "361",
    "icode": "1000098",
    "presc_reason": "EB",
    "presc_datetime": "2025-04-09 16:42:57",
    "presc_reason_2": "",
    "presc_reason_3": "",
    "presc_reason_4": "",
    "presc_reason_5": "",
    "hos_guid": null,
    "nhso_authorize_code": null,
    "opi_guid": null,
    "reason_ea": null,
    "reason_eb": null,
    "reason_ec": null,
    "reason_ed": null,
    "reason_ee": null,
    "reason_ef": null,
    "print_count": null,
    "reason_all": null,
    "key_data": null
  },
  {
    "ovst_presc_ned_id": 3,
    "vn": "680515085705",
    "doctor": "361",
    "icode": "1600002",
    "presc_reason": "EF",
    "presc_datetime": "2025-05-15 16:16:57",
    "presc_reason_2": "",
    "presc_reason_3": "",
    "presc_reason_4": "",
    "presc_reason_5": "",
    "hos_guid": null,
    "nhso_authorize_code": null,
    "opi_guid": null,
    "reason_ea": null,
    "reason_eb": null,
    "reason_ec": null,
    "reason_ed": null,
    "reason_ee": null,
    "reason_ef": null,
    "print_count": null,
    "reason_all": null,
    "key_data": null
  },
  {
    "ovst_presc_ned_id": 4,
    "vn": "680515085705",
    "doctor": "361",
    "icode": "1620008",
    "presc_reason": "EF",
    "presc_datetime": "2025-05-15 16:17:10",
    "presc_reason_2": "",
    "presc_reason_3": "",
    "presc_reason_4": "",
    "presc_reason_5": "",
    "hos_guid": null,
    "nhso_authorize_code": null,
    "opi_guid": null,
    "reason_ea": null,
    "reason_eb": null,
    "reason_ec": null,
    "reason_ed": null,
    "reason_ee": null,
    "reason_ef": null,
    "print_count": null,
    "reason_all": null,
    "key_data": null
  }
]
```
