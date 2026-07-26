# `patient_stat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| last_vn | varchar(12) | YES |  | NULL |  |  |
| last_an | varchar(9) | YES |  | NULL |  |  |
| opd_homemed_pick | char(1) | YES |  | NULL |  |  |
| covid_report_count | int(11) | YES | MUL | NULL |  |  |
| moph_update_ok | char(1) | YES |  | NULL |  |  |
| moph_update_datetime | datetime | YES |  | NULL |  |  |
| installed_line_connect | char(1) | YES |  | NULL |  |  |
| moph_lab_update_ok | char(1) | YES |  | NULL |  |  |
| moph_lab_update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cv1 | covid_report_count | no | 1 |
| ix_cv1 | moph_update_ok | no | 2 |
| PRIMARY | hn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hn": "560001899",
    "last_vn": "690520145613",
    "last_an": null,
    "opd_homemed_pick": null,
    "covid_report_count": 0,
    "moph_update_ok": "N",
    "moph_update_datetime": null,
    "installed_line_connect": null,
    "moph_lab_update_ok": "N",
    "moph_lab_update_datetime": null
  },
  {
    "hn": "600000840",
    "last_vn": "611211091919",
    "last_an": null,
    "opd_homemed_pick": null,
    "covid_report_count": null,
    "moph_update_ok": null,
    "moph_update_datetime": null,
    "installed_line_connect": null,
    "moph_lab_update_ok": "N",
    "moph_lab_update_datetime": null
  },
  {
    "hn": "530101940",
    "last_vn": "690521132710",
    "last_an": null,
    "opd_homemed_pick": "N",
    "covid_report_count": 0,
    "moph_update_ok": "Y",
    "moph_update_datetime": "2022-01-07 13:00:03",
    "installed_line_connect": "Y",
    "moph_lab_update_ok": "N",
    "moph_lab_update_datetime": null
  },
  {
    "hn": "580000910",
    "last_vn": "620204090046",
    "last_an": null,
    "opd_homemed_pick": null,
    "covid_report_count": null,
    "moph_update_ok": null,
    "moph_update_datetime": null,
    "installed_line_connect": null,
    "moph_lab_update_ok": "N",
    "moph_lab_update_datetime": null
  },
  {
    "hn": "530016247",
    "last_vn": "690226101539",
    "last_an": null,
    "opd_homemed_pick": null,
    "covid_report_count": 0,
    "moph_update_ok": "N",
    "moph_update_datetime": null,
    "installed_line_connect": null,
    "moph_lab_update_ok": "N",
    "moph_lab_update_datetime": null
  },
  {
    "hn": "580001717",
    "last_vn": "680128083040",
    "last_an": null,
    "opd_homemed_pick": null,
    "covid_report_count": 0,
    "moph_update_ok": "Y",
    "moph_update_datetime": "2021-10-08 12:59:54",
    "installed_line_connect": "Y",
    "moph_lab_update_ok": "N",
    "moph_lab_update_datetime": null
  },
  {
    "hn": "570001473",
    "last_vn": "690514081002",
    "last_an": null,
    "opd_homemed_pick": null,
    "covid_report_count": 0,
    "moph_update_ok": "N",
    "moph_update_datetime": null,
    "installed_line_connect": null,
    "moph_lab_update_ok": "N",
    "moph_lab_update_datetime": null
  },
  {
    "hn": "560001433",
    "last_vn": "690714073800",
    "last_an": null,
    "opd_homemed_pick": "N",
    "covid_report_count": 0,
    "moph_update_ok": "N",
    "moph_update_datetime": null,
    "installed_line_connect": null,
    "moph_lab_update_ok": "N",
    "moph_lab_update_datetime": null
  }
]
```
