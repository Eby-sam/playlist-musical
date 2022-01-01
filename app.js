let containerMusics = $("#musics");
let index = 0;

$("#createPlaylist").click(function () {
    $("#containerCreatePlaylist").css("display", "flex");
})

let containerSongs = $("#containerSongs").first()
let containerVideos = $("#video");
let nbClick = 0;
$('#ajoutPlaylist').css('border-raduis','0');
$("#enter1").click(function () {
    let namePlaylist = $("#name").val();
    let urlImage = $("#urlImage").val();
    index++;
    containerMusics.append(
        "<div class='playlists'>" +
        "<img class='imageProj' src='"+ urlImage +"'>" +
        "<button class='playPlaylist' id='playlist" + index + "'>" + namePlaylist + "</button>" +
        "<button id='ajoutPlaylist" + index + "'>add vidéo</button></div>"
    );
    setTimeout(function () {
        $("#containerCreatePlaylist").css("display", "none");
    }, 1000)

    $("#ajoutPlaylist" + index).click(function () {
        $("#containerCreateMusics").css("display", "flex");
    })
    $("#enter2").click(function () {
        let title = $("#title").val();
        let urlLink = $("#linkYtb").val();
        let videoLink =  $("#integrationVideo").val()

        containerSongs.append(
            "<div class=\"ligne\"></div>" +
            "<div class='songs'>" +
            "<p class='title'>" + title + "</p>" +
            "<a class='link' id='link" + index +"' href=''>Clique</a>" +
            "<button class='play' id='play" + index + "'>lancé la vidéo</button>" +
            "</div>"
        );
        $("#link" + index).attr("href", urlLink);

        $("#play" + index).click(function (){
            if(nbClick < 1){
                containerVideos.append(videoLink);
                containerVideos.css("display", "block");
                nbClick++;
            }
            else {
                containerVideos.css("display", "none");
                nbClick = 0;
            }
        })
        setTimeout(function () {
            $("#containerCreateMusics").css("display", "none");
        }, 1000)
    });
});