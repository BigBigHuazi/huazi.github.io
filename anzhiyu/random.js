var posts=["2022/04/24/Vol-000/","2022/07/02/Github配置ssh key/","2022/12/19/Vol-051/","2023/01/03/Vol-052/","2023/01/09/Vol-053/","2023/01/16/Vol-054/","2023/02/06/Vol-055/","2023/02/20/Vol-057/","2023/02/28/Vol-058/","2023/03/06/Vol-059/","2023/03/13/Vol-060/","2023/03/20/Vol-061/","2023/03/27/Vol-062/","2023/04/03/Vol-063/","2023/04/10/Vol-064/","2023/04/17/Vol-065/","2023/02/13/Vol-056/","2023/04/24/Vol-066/","2022/12/12/Vol-050/","2023/05/22/Vol-069/","2023/05/16/Vol-068/","2023/05/29/Vol-070/","2023/06/05/Vol-071/","2023/06/12/Vol-072/","2023/05/28/Vol-067/","2023/06/19/Vol-073/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};