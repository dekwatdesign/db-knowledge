# `ward`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ward | varchar(4) | NO | PRI |  |  |  |
| name | varchar(250) | YES | MUL | NULL |  |  |
| old_code | varchar(15) | YES | MUL | NULL |  |  |
| spclty | char(2) | YES |  | NULL |  |  |
| bedcount | int(11) | YES |  | NULL |  |  |
| shortname | varchar(20) | YES |  | NULL |  |  |
| sss_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| ward_export_code | varchar(50) | YES |  | NULL |  |  |
| ward_active | char(1) | YES |  | NULL |  |  |
| ipd_rx_shift_type_id | int(11) | YES |  | NULL |  |  |
| select_bedno_from_layout | char(1) | YES |  | NULL |  |  |
| ip_key | varchar(50) | YES |  | NULL |  |  |
| strict_access | char(1) | YES |  | NULL |  |  |
| lock_bedcount | char(1) | YES |  | NULL |  |  |
| real_bedcount | int(11) | YES |  | NULL |  |  |
| is_maternity_ward | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_old_code | old_code | no | 1 |
| name | name | no | 1 |
| PRIMARY | ward | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ward": "01",
    "name": "หอผู้ป่วยใน 2 (IPD2)",
    "old_code": null,
    "spclty": "09",
    "bedcount": 55,
    "shortname": null,
    "sss_code": null,
    "hos_guid": null,
    "ward_export_code": null,
    "ward_active": "N",
    "ipd_rx_shift_type_id": null,
    "select_bedno_from_layout": null,
    "ip_key": null,
    "strict_access": null,
    "lock_bedcount": null,
    "real_bedcount": null,
    "is_maternity_ward": null
  },
  {
    "ward": "02",
    "name": "หอผู้ป่วยใน 3 (IPD3)",
    "old_code": null,
    "spclty": "09",
    "bedcount": 35,
    "shortname": null,
    "sss_code": null,
    "hos_guid": null,
    "ward_export_code": null,
    "ward_active": "N",
    "ipd_rx_shift_type_id": null,
    "select_bedno_from_layout": null,
    "ip_key": null,
    "strict_access": null,
    "lock_bedcount": null,
    "real_bedcount": null,
    "is_maternity_ward": null
  },
  {
    "ward": "03",
    "name": "หอผู้ป่วยใน 4 (IPD4)",
    "old_code": null,
    "spclty": "09",
    "bedcount": 45,
    "shortname": null,
    "sss_code": null,
    "hos_guid": null,
    "ward_export_code": null,
    "ward_active": "N",
    "ipd_rx_shift_type_id": null,
    "select_bedno_from_layout": null,
    "ip_key": null,
    "strict_access": null,
    "lock_bedcount": null,
    "real_bedcount": null,
    "is_maternity_ward": null
  },
  {
    "ward": "04",
    "name": "หอผู้ป่วยใน 5 (IPD5)",
    "old_code": null,
    "spclty": "09",
    "bedcount": 15,
    "shortname": null,
    "sss_code": null,
    "hos_guid": null,
    "ward_export_code": null,
    "ward_active": "N",
    "ipd_rx_shift_type_id": null,
    "select_bedno_from_layout": null,
    "ip_key": null,
    "strict_access": null,
    "lock_bedcount": null,
    "real_bedcount": null,
    "is_maternity_ward": null
  },
  {
    "ward": "05",
    "name": "Home Ward",
    "old_code": null,
    "spclty": "09",
    "bedcount": 20,
    "shortname": null,
    "sss_code": null,
    "hos_guid": null,
    "ward_export_code": null,
    "ward_active": "Y",
    "ipd_rx_shift_type_id": null,
    "select_bedno_from_layout": null,
    "ip_key": null,
    "strict_access": null,
    "lock_bedcount": null,
    "real_bedcount": null,
    "is_maternity_ward": null
  },
  {
    "ward": "06",
    "name": "หอผู้ป่วยในเด็กเล็ก",
    "old_code": null,
    "spclty": "09",
    "bedcount": 75,
    "shortname": null,
    "sss_code": null,
    "hos_guid": null,
    "ward_export_code": null,
    "ward_active": "Y",
    "ipd_rx_shift_type_id": null,
    "select_bedno_from_layout": null,
    "ip_key": null,
    "strict_access": null,
    "lock_bedcount": null,
    "real_bedcount": null,
    "is_maternity_ward": null
  },
  {
    "ward": "07",
    "name": "หอผู้ป่วยในเด็กโต",
    "old_code": null,
    "spclty": "09",
    "bedcount": 60,
    "shortname": null,
    "sss_code": null,
    "hos_guid": null,
    "ward_export_code": null,
    "ward_active": "Y",
    "ipd_rx_shift_type_id": null,
    "select_bedno_from_layout": null,
    "ip_key": null,
    "strict_access": null,
    "lock_bedcount": null,
    "real_bedcount": null,
    "is_maternity_ward": null
  },
  {
    "ward": "08",
    "name": "หอผู้ป่วยหนักจิตเวชเด็กและวัยรุ่น",
    "old_code": null,
    "spclty": "09",
    "bedcount": 15,
    "shortname": null,
    "sss_code": null,
    "hos_guid": null,
    "ward_export_code": null,
    "ward_active": "Y",
    "ipd_rx_shift_type_id": null,
    "select_bedno_from_layout": null,
    "ip_key": null,
    "strict_access": null,
    "lock_bedcount": null,
    "real_bedcount": null,
    "is_maternity_ward": null
  }
]
```
