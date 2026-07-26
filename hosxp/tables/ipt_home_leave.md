# `ipt_home_leave`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_home_leave_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| dch_date | date | YES |  | NULL |  |  |
| dch_time | time | YES |  | NULL |  |  |
| reg_date | date | YES |  | NULL |  |  |
| reg_time | time | YES |  | NULL |  |  |
| leave_note | varchar(250) | YES |  | NULL |  |  |
| no_service_charge | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_an_dch_reg_date | an | no | 1 |
| ix_an_dch_reg_date | dch_date | no | 2 |
| ix_an_dch_reg_date | reg_date | no | 3 |
| ix_an_dch_reg_date | no_service_charge | no | 4 |
| ix_an_dch_reg_date_index | an | no | 1 |
| ix_an_dch_reg_date_index | dch_date | no | 2 |
| ix_an_dch_reg_date_index | no_service_charge | no | 3 |
| ix_an_dch_reg_date_index | reg_date | no | 4 |
| PRIMARY | ipt_home_leave_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipt_home_leave_id": 1,
    "an": "580000979",
    "dch_date": "2015-11-17",
    "dch_time": "16:00:00",
    "reg_date": "2015-11-23",
    "reg_time": "7:00:00",
    "leave_note": null,
    "no_service_charge": null
  },
  {
    "ipt_home_leave_id": 3,
    "an": "580000633",
    "dch_date": "2015-07-08",
    "dch_time": "8:00:00",
    "reg_date": "2015-07-13",
    "reg_time": "8:00:00",
    "leave_note": null,
    "no_service_charge": null
  },
  {
    "ipt_home_leave_id": 4,
    "an": "580000633",
    "dch_date": "2015-07-15",
    "dch_time": "8:00:00",
    "reg_date": "2015-07-20",
    "reg_time": "8:00:00",
    "leave_note": null,
    "no_service_charge": null
  },
  {
    "ipt_home_leave_id": 5,
    "an": "580000633",
    "dch_date": "2015-07-22",
    "dch_time": "8:00:00",
    "reg_date": "2015-07-28",
    "reg_time": "8:00:00",
    "leave_note": null,
    "no_service_charge": null
  },
  {
    "ipt_home_leave_id": 6,
    "an": "580000633",
    "dch_date": "2015-07-29",
    "dch_time": "8:00:00",
    "reg_date": "2015-08-03",
    "reg_time": "8:00:00",
    "leave_note": null,
    "no_service_charge": null
  },
  {
    "ipt_home_leave_id": 7,
    "an": "580000633",
    "dch_date": "2015-08-05",
    "dch_time": "8:00:00",
    "reg_date": "2015-10-08",
    "reg_time": "8:00:00",
    "leave_note": null,
    "no_service_charge": null
  },
  {
    "ipt_home_leave_id": 8,
    "an": "580000633",
    "dch_date": "2015-08-12",
    "dch_time": "8:00:00",
    "reg_date": "2015-08-24",
    "reg_time": "8:00:00",
    "leave_note": null,
    "no_service_charge": null
  },
  {
    "ipt_home_leave_id": 9,
    "an": "580000633",
    "dch_date": "2015-08-26",
    "dch_time": "8:00:00",
    "reg_date": "2015-09-01",
    "reg_time": "8:00:00",
    "leave_note": null,
    "no_service_charge": null
  }
]
```
