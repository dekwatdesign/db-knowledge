# `james_f43_drugallergy`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| DATERECORD | varchar(8) | YES |  | NULL |  |  |
| DRUGALLERGY | varchar(24) | YES |  | NULL |  |  |
| DNAME | varchar(255) | YES |  | NULL |  |  |
| TYPEDX | varchar(1) | YES |  | NULL |  |  |
| ALEVEL | varchar(1) | YES |  | NULL |  |  |
| SYMPTOM | varchar(10) | YES |  | NULL |  |  |
| INFORMANT | varchar(1) | YES |  | NULL |  |  |
| INFORMHOSP | varchar(5) | YES |  | NULL |  |  |
| D_UPDATE | varchar(14) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PID | PID | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "HOSPCODE": "12251",
    "PID": "016387",
    "DATERECORD": "20131102",
    "DRUGALLERGY": "100776255001460930881602",
    "DNAME": "Sodium,valproate",
    "TYPEDX": "5",
    "ALEVEL": "1",
    "SYMPTOM": "--",
    "INFORMANT": "1",
    "INFORMHOSP": "12251",
    "D_UPDATE": "20131206153051"
  },
  {
    "HOSPCODE": "12251",
    "PID": "019896",
    "DATERECORD": "20140131",
    "DRUGALLERGY": "",
    "DNAME": "bactrim,suspension",
    "TYPEDX": "5",
    "ALEVEL": "1",
    "SYMPTOM": "--",
    "INFORMANT": "1",
    "INFORMHOSP": "12251",
    "D_UPDATE": "20140131134922"
  },
  {
    "HOSPCODE": "12251",
    "PID": "000308",
    "DATERECORD": "20130529",
    "DRUGALLERGY": "100176000004493120181506",
    "DNAME": "AMOXICILLIN",
    "TYPEDX": "5",
    "ALEVEL": "1",
    "SYMPTOM": "--",
    "INFORMANT": "1",
    "INFORMHOSP": "12251",
    "D_UPDATE": "20130529144854"
  },
  {
    "HOSPCODE": "12251",
    "PID": "008520",
    "DATERECORD": "20140307",
    "DRUGALLERGY": "",
    "DNAME": "Amoxycillin",
    "TYPEDX": "5",
    "ALEVEL": "1",
    "SYMPTOM": "--",
    "INFORMANT": "1",
    "INFORMHOSP": "12251",
    "D_UPDATE": "20140307153807"
  },
  {
    "HOSPCODE": "12251",
    "PID": "008520",
    "DATERECORD": "20140307",
    "DRUGALLERGY": "",
    "DNAME": "Amoxycillin/Clavulanate",
    "TYPEDX": "5",
    "ALEVEL": "1",
    "SYMPTOM": "--",
    "INFORMANT": "1",
    "INFORMHOSP": "12251",
    "D_UPDATE": "20140307153807"
  },
  {
    "HOSPCODE": "12251",
    "PID": "008465",
    "DATERECORD": "20140203",
    "DRUGALLERGY": "",
    "DNAME": "Amoxycillin",
    "TYPEDX": "5",
    "ALEVEL": "1",
    "SYMPTOM": "--",
    "INFORMANT": "1",
    "INFORMHOSP": "12251",
    "D_UPDATE": "20140203100055"
  },
  {
    "HOSPCODE": "12251",
    "PID": "015525",
    "DATERECORD": "20110418",
    "DRUGALLERGY": "101284000004021220181725",
    "DNAME": "CEFIXIME",
    "TYPEDX": "5",
    "ALEVEL": "1",
    "SYMPTOM": "--",
    "INFORMANT": "1",
    "INFORMHOSP": "12251",
    "D_UPDATE": "20131223181349"
  },
  {
    "HOSPCODE": "12251",
    "PID": "010819",
    "DATERECORD": "20130725",
    "DRUGALLERGY": "",
    "DNAME": "Methylphenidate,HCl",
    "TYPEDX": "5",
    "ALEVEL": "1",
    "SYMPTOM": "--",
    "INFORMANT": "1",
    "INFORMHOSP": "12251",
    "D_UPDATE": "20130725160037"
  }
]
```
